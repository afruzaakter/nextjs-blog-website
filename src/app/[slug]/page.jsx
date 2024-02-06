import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus modi sit quo est? Similique magni dolore excepturi qui! Repellendus?</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                           <Image src="/p1.jpeg"  alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                          <span className={styles.username}>John Doe</span>
                          <span className={styles.date}>01.01.2024</span>
                          
                        </div>

                    </div>
                </div>
                 <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                 </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam dolore. Suscipit laudantium illum esse architecto veniam corrupti excepturi temporibus, quaerat aut impedit. Illum perspiciatis a asperiores dignissimos aliquam itaque ipsa omnis minima nemo? Id officia voluptatum inventore </p>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam dolore. Suscipit laudantium illum esse architecto veniam corrupti excepturi temporibus, quaerat aut impedit. Illum perspiciatis a asperiores dignissimos aliquam itaque ipsa omnis minima nemo? Id officia voluptatum inventore </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam dolore. Suscipit laudantium illum esse architecto veniam corrupti excepturi temporibus, quaerat aut impedit. Illum perspiciatis a asperiores dignissimos aliquam itaque ipsa omnis minima nemo? Id officia voluptatum inventore </p>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;