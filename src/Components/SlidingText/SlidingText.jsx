import Marquee from "react-fast-marquee";


const SlidingText = () => {
    return (
        <div>
            <div className="mx-2 p-2 bg-red-500 text-white text-xl my-1 rounded-xl   ">
                <Marquee className="">
                আমাদের দোকান সাত মসজিদ সুপার মার্কেট এর ২য় তলা মোহাম্মদপুর,ঢাকা । যেকোন বা প্রশ্নের জন্য এই নম্বরে যোগাযোগ করুন +880 1604-134742, +880 1317-543508 ।  
                </Marquee>
            </div>
        </div>
    );
};

export default SlidingText;