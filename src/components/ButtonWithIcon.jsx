export default function ButtonWithIcon({ link, text, icon: Icon }) {
    return (
        <a
            href={link}
            className="items-center pt-1.5 pb-2 px-6 rounded-3xl border-[1px] gap-2 flex"
        >
            <span className="text-sm">{text}</span>
            <img src={`${Icon}`} alt="" />
        </a>
    );
}
