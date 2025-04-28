import { useState } from "react";
import { Range } from 'react-range';
import '/src/blocks/Algorithm/algorithm.css';

export default function RangePrice({ onPriceChange }) {
    const [values, setValues] = useState([100000]);

    const handleChange = (values) => {
        setValues(values);
        onPriceChange(values[0]);
    };

    return (
        <div className="section-algo price-range" data-label="price">
            <label htmlFor="price">Диапазон цены:</label>
            <Range
                style={{ marginBottom: '10px', marginTop: '10px' }}
                step={1000}
                min={0}
                max={200000}
                values={values}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            backgroundColor: "#ccc",
                        }}
                    >
                        <div
                            style={{
                                height: "6px",
                                width: `${values[0] / 200000 * 100}%`,
                                backgroundColor: "#298be4",
                                position: 'absolute',
                                left: 0
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#999",
                            border: '2px solid #fff',
                            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
                            cursor: "grab",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                        }}
                    >
                        <div style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            width: '12px',
                            height: '12px'
                        }}></div>
                    </div>
                )}
            />
            <div className="price-values ma-top-block">
                <span>0 руб.</span>
                <span id="current-price">{values} руб</span>
                <span>200 000 руб.</span>
            </div>
        </div>
    )
}
