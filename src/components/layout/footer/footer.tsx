import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/EduardoCitelli"
                target="_blank"
                rel="noopener noreferrer"
            >
                Developed by @EduardoCitelli
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="github"></img>
            </a>
        </footer>
    );
}

export default Footer;

