function SkillList({skill,src}) {
  return (
    <span>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList