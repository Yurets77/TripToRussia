const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");
class UserService{
    async registration(email, password, name, surname, telephone, gender){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с таким почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await  UserModel.create({name, surname, telephone,gender,email, password: hashPassword, activationLink})
        await  mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user) // id email isActivated
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{...tokens, user: userDto}
    }

    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest("Неккоректная ссылка активации")
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password){
        const user = await  UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
       const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals){
            throw ApiError.BadRequest('Неверный пароль')
        }
        const  userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{...tokens, user: userDto}
    }


    async logout(refreshToken){
        const token = await  tokenService.removeToken(refreshToken)
        return token
    }


    async refresh(refreshToken){
        if (!refreshToken){
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{...tokens, user: userDto}
    }

    async changeData(ID,name, surname, gender) {
        try {
            const user = await UserModel.findById(ID)
            if (!user) {
                // Если пользователь с oldEmail не найден, то мы ищем пользователя по email
                    throw ApiError.BadRequest('Пользователь с таким ID не найден');
                }
            await user.updateOne({
                name,
                surname,
                gender
            });
            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken)
            return {...tokens, user: userDto}
        } catch (e) {
            throw e;
        }
    }

    async changeContacts(oldEmail, email, telephone){
        try {
            const user = await UserModel.findOne({email:oldEmail})
            if(!user){
                throw ApiError.BadRequest('Пользователь с таким email не найден')
            }
            if (email !== oldEmail) { // Check if the new email is different from the old one
                const activationLink = uuid.v4(); // Генерируем новый activation link
                await user.updateOne({
                    email,
                    telephone,
                    isActivated:false,
                    activationLink
                });
                await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
            } else {
                await user.updateOne({
                    telephone
                })
            }
            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken)
            return {...tokens, user: userDto}
        } catch (e){
            throw e
        }
    }

}

module.exports = new UserService();