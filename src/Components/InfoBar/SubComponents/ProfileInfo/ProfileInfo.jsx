import classes from './ProfileInfo.module.css'
function ProfileInfo(){
    return(
        <>
        <div className={classes.main}>
            <p className={classes.header}><b><span className={classes.green}>A</span>bout Me</b></p>
            <b className={classes.hr + " " + classes.anim}></b>
            <p className={classes.pre}>
                <b className={classes.white}>Hello There 👋</b><br /><br/>
                {`My journey in cybersecurity is not just a profession; it's a genuine passion`}<br/>{` that fuels my commitment to ensuring the highest levels of data protection and risk mitigation.`}<br/>{` Whether unraveling complex vulnerabilities through penetration testing or implementing robust defense strategies,`}<br/>{` I thrive on the challenges that the ever-evolving cyber realm presents.
                Beyond the digital realm,`}<br/>{` I'm an avid learner and technology enthusiast. My goal is to contribute to a secure digital future, and I'm excited to embark on new opportunities that allow me to make a meaningful impact.`}<br/>{`
                `}<br/><br/><br/>{` My commitment extends to collaborating on secure development lifecycle, SIEM, and expertise in Auditing, XDR, EDR, DLP, IPS/IDS, Cloud (AWS, GCP, Azure), and more.`}
                <br /><br/><br /><b className={classes.white}>{`CERTIFICATE .......`}</b>{` CEI, CEH, CNSS, ICS, Autopsy `}<b className={classes.white}>{`ㅤㅤㅤㅤRESIDENCE .......`}</b>{` Bangladesh`}<br/><br />{` 
                `}<b className={classes.white}>{`FREELANCE`}</b>{` ....... Available ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`}<b className={classes.white}>{`ADDRESS .......`}</b>{` Dhaka, Bangladesh`}
                <br /><br /><br /><br /><br />
</p>
                
                  <p className={classes.header}><b><span className={classes.green}>M</span>y Services</b></p>
                <div className={classes.grid}>
                    <div className={classes.item}>
                         <b><i className="bi bi-shield-shaded"></i></b>

                         <p><b>Application Security</b>
                         <hr />

                         Securing applications is not just my expertise; it`s my commitment to ensuring that your digital innovations remain resilient, protected, and shielded from evolving cyber threats.
                         </p>
                         
                    </div>
                    <div className={classes.item}>
                        <b><i className="bi bi-check-circle-fill"></i></b>
                        <p><b>Incident Response</b><br />
                        <hr />

                        In the face of digital threats, my expertise shines in incident response. Rapid, strategic, and decisive, I specialize in orchestrating effective responses to cyber incidents, ensuring minimal impact and swift recovery for your digital landscape.
                        </p>
                    </div>

                    <div className={classes.item}>
<i className="bi bi-cloudy-fill"></i>
                            <p><b>Cloud Security</b><br />
                            <hr />

                            As a guardian of cloud infrastructure security, I specialize in crafting resilient and impenetrable digital ecosystems. With expertise in cloud security protocols and a commitment to safeguarding your data, I ensure a fortified and trustworthy foundation for your cloud-based operations
                            </p>
                            
                    </div>
                    
                    <div className={classes.item}>
                    <i className="bi bi-card-checklist"></i>
                        <p><b>IT Consultan</b><br />
                        <hr />

                        As your IT consultant, I bring strategic expertise to optimize technology and fortify security. Let`s collaborate to enhance your IT landscape, driving innovation and efficiency for your business.
                        </p>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p className={classes.header}><b><span className={classes.green}>C</span>lients</b></p>
                <br /><br /><br />

                <div className={classes.cContainer}>
                <div><img src="https://asibulhasan.me/uploads/2023/12/rainproxy_full_1684306616-184x184.jpg" alt="" /></div>
                <div><img src="https://asibulhasan.me/uploads/2023/12/paseetah-184x54.jpg" alt="" /></div>
                <div><img src="https://asibulhasan.me/uploads/2023/12/redstrings-184x97.png" alt="" /></div>
                <div><img src="https://asibulhasan.me/uploads/2023/12/The-Spanish-Group-Logo-184x122.webp" alt="" /></div>
                </div>
<br />
<p className={classes.header}><b><span className={classes.green}>T</span>estimonials</b></p>
<b className={classes.hr + " " + classes.anim}></b>

<br /><br /><br />
               <div className={classes.testc}> <p>
                
Asif played a pivotal role in guiding our team through the <br /> challenging SOC2 audit process. His in-depth knowledge of cybersecurity and <br /> meticulous attention to detail ensured a smooth and successful audit. <br /> We greatly appreciate his expertise and <br />commitment to securing our digital assets. 
                <br /><br /><b>Emily Thompson</b><br />SecureTect Soliutions</p></div>
                <b className={classes.hr + " " + classes.anim}></b>
<br /><br /><br /><br />
                <p className={classes.header}><b><span className={classes.green}>F</span>un Facts</b></p>
                <b className={classes.hr + " " + classes.anim}></b>
                <br /><br /><br />
               <div className={classes.fun}>
                <div>
                    <b>
                        <i className="bi bi-mortarboard-fill"></i>
                        <h3>Cyber <br /> Security <br /> Instructor</h3>
                    </b>
                </div>
                <div>
                    <b>
                    <i className="bi bi-award-fill"></i>
                        <h3>3  <br />awerds <br /> won</h3>
                    </b>
                </div>
                <div>
                    <b>
                    <i className="bi bi-check-square"></i>
                        <h3>1 000+  <br />Complete  <br />project</h3>
                    </b>
                </div>
                <div>
                    <b>
                    <i className="bi bi-flag-fill"></i>
                        <h3>300+ <br /> Clients</h3>
                    </b>
                </div>
               </div>


        </div>
        </>
    );
}
export default ProfileInfo