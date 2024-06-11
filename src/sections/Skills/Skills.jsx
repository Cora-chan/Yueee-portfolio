import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='HTML'/>
           <SkillList src={checkMarkIcon} skill='CSS'/>
           <SkillList src={checkMarkIcon} skill='JavaScript'/>
           <SkillList src={checkMarkIcon} skill='TypeScript'/>
           <SkillList src={checkMarkIcon} skill='Node.js'/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='React'/>
           <SkillList src={checkMarkIcon} skill='Vue'/>
           <SkillList src={checkMarkIcon} skill='Liquid'/>
           <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
           <SkillList src={checkMarkIcon} skill='Storybook'/>
           <SkillList src={checkMarkIcon} skill='jQuery'/>
           <SkillList src={checkMarkIcon} skill='Bootstrap'/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='Redux'/>
           <SkillList src={checkMarkIcon} skill='Webpack'/>
           <SkillList src={checkMarkIcon} skill='Git'/>
           <SkillList src={checkMarkIcon} skill='Yarn'/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill='Episerver(Optimizely)'/>
           <SkillList src={checkMarkIcon} skill='Sitecore'/>
           <SkillList src={checkMarkIcon} skill='.Net'/>
           <SkillList src={checkMarkIcon} skill='.Net Core'/>
           <SkillList src={checkMarkIcon} skill='C#'/>
           <SkillList src={checkMarkIcon} skill='SQL'/>
           <SkillList src={checkMarkIcon} skill='SQL Server'/>
        </div>
    </section>
  )
}

export default Skills