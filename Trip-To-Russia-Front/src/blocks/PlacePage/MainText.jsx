import { useState } from 'react';

export default function MainText({info}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section>
            <div className="container-text-museum">
                <div className={`slidingContent ${isExpanded ? 'expanded' : ''}`}>
                    {info.mainText.map((item, index) => (
                        <li style={{listStyleType: 'none'}} key={index}>
                            <p className='descr-1' key={index}>{item.text}</p>
                        </li>
                    ))}
                </div>
                <div className="readmore-move">
                    <button className={`readmore ${isExpanded ? 'expanded' : ''}`} onClick={handleReadMoreClick}>
                        {isExpanded ? 'Свернуть' : 'Читать дальше'}
                    </button>
                </div>
            </div>
        </section>
    );
}