import Tabs from '../components/Notifications/Tabs';
import Footer from '../components/Home/Footer';
import NotificationCard from '../components/Notifications/Card';

const CardData = [
    {
        title: "911",
        text: "JUST NOW outgoing 32min"
    },
    {
        title: "SON",
        text: "0238736482"
    },
    {
        title: "AMBULANCE",
        text: "0238736482"
    },
    {
        title: "XXXXXXX",
        text: "xxxxxxxxxxx"
    },
    {
        title: "XXXXXXX",
        text: "xxxxxxxxxxx"
    }
];

export default function Notifications() {
    return (
        <div className="bg-[#7A87B8]">
            <Tabs />
            <div className="flex flex-col justify-center">
                {CardData.map((card, index) => (
                    <NotificationCard cardObj={card} key={index} />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

