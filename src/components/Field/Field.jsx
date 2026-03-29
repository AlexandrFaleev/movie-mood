import './Field.css';

export const Field = (props) => {
    const {
        id,
        name="",
        className = '',
        type="text",
        title,
        value,
        onInput
    } = props;

    return(
        <div className={`${className} field`}>
            <label
                htmlFor={id}
                className='field__label'
            >
                {title}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                className='field__input'
                placeholder=" "
                autoComplete="off"
                value={value}
                onInput={onInput}
            />
        </div>
    )
}