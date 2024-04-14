import css from "./contact.module.css";

export default function Contact({onDelete, contacts: {
    id,
    name,
    number
} }) {
    return (
        <div className={css.container}>
            <div className={css.contact}>
                <p className={css.text}>{ name}</p>
                <p className={css.text}>{number}</p>
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
}