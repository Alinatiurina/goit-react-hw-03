import css from "./contact.module.css";

export default function Contact({ contacts: {
    name,
    number
} }) {
    return (
        <div className={css.container}>
            <div className={css.contact}>
                <p className={css.text}>{ name}</p>
                <p className={css.text}>{number}</p>
            </div>
            <button>Delete</button>
        </div>

    );
}