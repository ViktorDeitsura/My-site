export default function Header() {
    return (
        <>
            <header className="flex justify-center border border-solid">
                <div className="container flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-sofia text-[30px]">VictorDeitsura</span>
                        <span className="font-nunito text-[13px] mt-[-10px] ml-[32px]">middle FullStack developer</span>
                    </div>
                    <div className="flex gap-[16px] items-center">
                        <div className="py-[8px] px-[16px]">
                            <a href="">Projects</a>
                        </div>
                        <div className="py-[8px] px-[16px]">
                            <a href="">About Me</a>
                        </div>
                        <div className="py-[8px] px-[16px]">
                            <a href="">Resume</a>
                        </div>
                    </div>
                </div>
            </header>  
        </> 
    );
}