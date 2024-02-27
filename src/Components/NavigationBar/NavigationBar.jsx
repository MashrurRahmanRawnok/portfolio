import classes from './NavigationBar.module.css'
function NavigationBar() {
  
  return (
    <>
    <div className={classes.main}>
      
      
      <div className={classes.s1}>
        <span>
          <i><br /></i></span>
        <span> 
          <i className={"bi bi-list" + " " + classes.i1} id='menu'><br className={classes.br20}/></i>
        </span>
        <span> 
          <i className={"bi bi-brightness-high" + " " + classes.i2 } id='ThemeChange'></i>
        </span>
      </div>



      <div className={classes.s2}>
        <span><i><br /></i></span>

        <a href="#"><span><i className={"bi bi-person" + " " + classes.i}></i></span>
        <label className={classes.navlab}>Profile</label></a>
        <b className={classes.hr + " " + classes.anim}></b>

        <a href="#"><span><i className={"bi bi-card-list" + " " + classes.i}></i></span>
        <label className={classes.navlab}>Resume</label></a>
        <b className={classes.hr + " " + classes.anim}></b>

        <a href="#"><span><i className={"bi bi-images" + " " + classes.i}></i></span>
        <label className={classes.navlab}>Gallary</label></a>
        <b className={classes.hr + " " + classes.anim}></b>

        <a href="#"><span><i className={"bi bi-file-text" + " " + classes.i}></i></span>
        <label className={classes.navlab}>Blog</label></a>
        <b className={classes.hr + " " + classes.anim}></b>

        <a href="#"><span><i className={"bi bi-envelope" + " " + classes.i}></i></span>
        <label className={classes.navlab}>Contact</label></a>
      </div>
    </div>
    </>
  );
}

export default NavigationBar
