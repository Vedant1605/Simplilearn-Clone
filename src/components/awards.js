import './award.css'
import AwardCard from './awardCard'
const AWARDS = [
    {
        img: "https://www.simplilearn.com/ice9/assets/home/2018-gold-winner.png",
        title: "2018 Gold Winner",
        for: "For Customer Service by Stevie Awards"
    },
    {
        img: "https://www.simplilearn.com/ice9/assets/home/2018-gold-winner.png",
        title: "2020 Gold Winner",
        for: "For Customer Service by Stevie Awards"
    },
    {
        img: "https://www.simplilearn.com/ice9/assets/home/AGBA-2020-winner.png",
        title: "2020  Winner",
        for: "Innovations in Edtech by Aegis Graham Bell AwardFor Customer Service by Stevie Awards"
    },
]
const awds = AWARDS.map(awa => <AwardCard src={awa.img} title={awa.title} for={awa.for} />)
const awards = () => (
    <div className="awaCont">
        <h3>Awards</h3>
        <div className="awards">
        {awds}
        </div>
    </div>
)
export default awards