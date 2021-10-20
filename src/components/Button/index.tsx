import styles from './button.module.scss'

interface ButtonProps {
    name: string;
}

export function Button({name}: ButtonProps){
    return(
        <button
        className={styles.subscribeButton}>
            {name}
        </button>
    );
}