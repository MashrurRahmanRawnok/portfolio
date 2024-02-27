import classes from './Resume.module.css'
function Resume(){
    return(
        <>
        <div className={classes.main}>
            <p className={classes.header}><b><span className={classes.green}>R</span>esume</b></p>
            <b className={classes.hr + " " + classes.anim}></b>
            <div className={classes.fifty}>
                <div className={classes.one}>
                    <h3>EXPERIENCE</h3>
                    <hr />

                    <br />
                    <p>
                        <span className={classes.time}>2022 - Present</span><br /><br />
                        <b>IT Security Operations <br />Engineer</b><br />
                        <br /><small>DocDoc Pte.</small><img className={classes.xpimg} src="https://asibulhasan.me/uploads/2023/12/download.jpeg" alt="DocDoc" /><br />
                        I assess and secure web, network, and cloud vulnerabilities, collaborating on swift issue resolution. From managing incidents to implementing patches, I ensure end-to-end security and compliance in IT operations.
                    </p>
                    <br /><br /><hr /><br /><br />
                    <p>
                    <span className={classes.past}>2020 - 2022</span><br /><br />
                        <b>Penetration <br /> Tester</b><br />
                        <br /> <small>Doodle Inc.</small><img src="https://asibulhasan.me/uploads/2023/12/doodle-inc.jpeg" alt="Doodle" /><br />
                       <br /><br /> Executing expert penetration tests using cutting-edge tools, I collaborate with teams to seamlessly integrate security into the DevOps lifecycle, ensuring compliance and addressing client security concerns. My analyses inform detailed reports and contribute to security awareness through training on secure coding practices.
                    </p>
                </div>
                <div className={classes.two}>
                <h3>INSTRUCTOR</h3>
                    <hr />
                    <br />
                    <p>
                        <span className={classes.time}>2021 - Present</span><br /><br />
                        <b>Ethical Hacking Instructor</b><br /><img src="https://asibulhasan.me/uploads/2023/12/eshikhon.png" alt="Doodle" />
                        <small>eshikhon.com</small><br /><br />
                       
                    </p>
                    <br /><br /><hr /><br /><br />
                    <p>
                    <span className={classes.past}>2019 - 2021</span><br /><br />
                        <b>Sr. Cyber Security Instructor</b><br /><img src="https://asibulhasan.me/uploads/2023/12/technology-palli.png" alt="Doodle" />
                        <small>Technology Palli</small>

                    
                    </p>
                </div>
            </div>

        </div>
        </>
    );
}
export default Resume