export function Button({onclick, label}) {
    return <button className="btn btn-primary" type="button" onClick={onclick}>{label}</button>
}

export default Button;