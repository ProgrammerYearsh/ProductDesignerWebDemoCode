import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.logosParent}>
        <div className={styles.logos}>
          <div className={styles.freelanceWeb}>Freelance Web</div>
        </div>
        <div className={styles.homeParent}>
          <b className={styles.home}>Home</b>
          <b className={styles.projects}>Projects</b>
          <b className={styles.projects}>Contact Me</b>
          <b className={styles.projects}>About Me</b>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.hiIAmALexaAProductDesiParent}>
          <b className={styles.hiIAmALexaAProductDesi}>
            <p className={styles.hiIAm}>Hi, I am A lexa</p>
            <p className={styles.hiIAm}>{`A Product Designer `}</p>
            <p className={styles.basedInLos}>based in Los Angeles .</p>
          </b>
          <div className={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            posuere ultrices viverra enim sit urna tempor pellentesque.
          </div>
          <button className={styles.btn}>
            <img className={styles.groupIcon} alt="" src="../group.svg" />
            <div className={styles.contactMeNow}>Contact Me Now</div>
          </button>
        </div>
        <img
          className={styles.unsplashktEQq8dw4Icon}
          alt=""
          src="../unsplashkte-qq8dw4@2x.png"
        />
      </div>
      <div className={styles.featuredParent}>
        <div className={styles.featured}>
          <img className={styles.featuredChild} alt="" src="../arrow-1.svg" />
          <b className={styles.featuredWork}>Featured Work</b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.unsplashd2w1ljioqParent}>
            <img
              className={styles.unsplashd2w1ljioqIcon}
              alt=""
              src="../unsplashd2w-1ljioq@2x.png"
            />
            <img
              className={styles.unsplashd2w1ljioqIcon}
              alt=""
              src="../unsplashoqtafyt5ktw@2x.png"
            />
          </div>
          <div className={styles.unsplashd2w1ljioqParent}>
            <img
              className={styles.unsplashwoc71cKzqIcon}
              alt=""
              src="../unsplashwoc7-1c-kzq@2x.png"
            />
            <img
              className={styles.unsplashgkfqeoubrcoIcon}
              alt=""
              src="../unsplashgkfqeoubrco@2x.png"
            />
          </div>
          <div className={styles.unsplashd2w1ljioqParent}>
            <img
              className={styles.unsplashgkfqeoubrcoIcon}
              alt=""
              src="../unsplash5sf6nrb1meg@2x.png"
            />
            <img
              className={styles.unsplashgkfqeoubrcoIcon}
              alt=""
              src="../unsplashmp7apsum7ae@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.whyMeParent}>
          <b className={styles.whyMe}>WHy me?</b>
          <b className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            pharetra, ac purus diam leo eget. Sem a magna egestas ridiculus.
          </b>
          <div className={styles.btn1}>
            <div className={styles.learnMore}>Learn More</div>
          </div>
        </div>
        <img
          className={styles.unsplashkt2cjub6oh8Icon}
          alt=""
          src="../unsplashkt2cjub6oh8@2x.png"
        />
      </div>
      <div className={styles.personalProjectsParent}>
        <b className={styles.projects}>Personal Projects</b>
        <div className={styles.unsplashl7yeuyg68z8Parent}>
          <img
            className={styles.unsplashl7yeuyg68z8Icon}
            alt=""
            src="../unsplashl7yeuyg68z8@2x.png"
          />
          <img
            className={styles.unsplashl7yeuyg68z8Icon}
            alt=""
            src="../unsplashmxvkwpijals@2x.png"
          />
          <img
            className={styles.unsplashl7yeuyg68z8Icon}
            alt=""
            src="../rectangle-4@2x.png"
          />
        </div>
      </div>
      <div className={styles.contactMeParent}>
        <b className={styles.contactMe1}>Contact Me</b>
        <div className={styles.loremIpsumDolorSitAmetCo2}>
          <p
            className={styles.hiIAm}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
          <p className={styles.basedInLos}>
            Convallis vel suspendisse risus, egestas tempor.
          </p>
        </div>
        <div className={styles.btn2}>
          <img className={styles.groupIcon} alt="" src="../group1.svg" />
          <div className={styles.learnMore}>hi@yourname.com</div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.designByCopyright2022Wrapper}>
          <div className={styles.designByCopyright2022}>
            <span>{`Design by `}</span>
            <span className={styles.span}>{` `}</span>
            <span> — Copyright 2022</span>
          </div>
        </div>
        <div className={styles.icons}>
          <img className={styles.groupIcon2} alt="" src="../group2.svg" />
          <img className={styles.groupIcon3} alt="" src="../group3.svg" />
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <img className={styles.groupIcon4} alt="" src="../group4.svg" />
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
