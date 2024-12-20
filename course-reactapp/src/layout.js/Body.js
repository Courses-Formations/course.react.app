import styles from '../styles/styles.module.css';
import Operation from '../components/Operation';
import Form from '../components/Form';
import Country from '../components/Country';
import Province from '../components/Province';
import List from '../components/List';
import EventForm from '../components/Events';
import FormState from '../components/FormState';
/**
 * 
 * @returns 
 */
export default function Body() {
    return (
        <>
            <body>
                <div className={styles.cardRow}>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Component Form</h2>
                                <Form></Form>
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Component Operation</h2>
                                <Operation></Operation>
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Props</h2>
                                <Province name="Lunda Norte" county="Cambulo" />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className={styles.cardColumn}>

                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Props Reutilização</h2>
                                <Province name="Lunda Sul" county="Saurimo" />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Props Estruturas</h2>
                                <Country code="AO" name="Angola" state="Luanda" city="Belas" />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Props Dinamicas</h2>
                                <Country code="PT" name="Portugal" state="Setúbal" city="Almada" />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <h2>Fragment</h2>
                                <List />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <EventForm />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.cardColumn}>
                        <div className={styles.cardContainer}>
                            <a className={styles.card}>
                                <FormState />
                                <div className={styles.cardCorner}>
                                    <div className={styles.cardArrow}>
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </>

    );

}