import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiCsharp,
    SiDatagrip,
    SiDebian,
    SiDocker,
    SiElasticsearch,
    SiGit,
    SiGo,
    SiGooglecloud,
    SiJavascript,
    SiJenkins,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiOpencollective,
    SiPhp,
    SiPhpstorm,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
    SiYarn,
} from 'react-icons/si'

export default function StackThatIUse() {
    return (
        <>
            <div className="col-span-6 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-6 text-fuchsia-100 md:col-span-3">
                <div className="grid w-full grid-cols-6 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
                    <SiTypescript size={24} className="hover:text-indigo-300" />
                    <SiDocker size={24} className="hover:text-indigo-300" />
                    <SiNextdotjs size={24} className="hover:text-indigo-300" />
                    <SiRedis size={24} className="hover:text-indigo-300" />
                    <SiPostgresql size={24} className="hover:text-indigo-300" />
                    <SiMongodb size={24} className="hover:text-indigo-300" />
                    <SiMysql size={24} className="hover:text-indigo-300" />
                    <SiElasticsearch
                        size={24}
                        className="hover:text-indigo-300"
                    />
                    <SiReact size={24} className="hover:text-indigo-300" />
                    <SiTailwindcss
                        size={24}
                        className="hover:text-indigo-300"
                    />
                    <SiNodedotjs size={24} className="hover:text-indigo-300" />
                    <SiGo size={24} className="hover:text-indigo-300" />
                    <SiJavascript size={24} className="hover:text-indigo-300" />
                    <SiGooglecloud
                        size={24}
                        className="hover:text-indigo-300"
                    />
                    <SiPhp size={24} className="hover:text-indigo-300" />
                    <SiCsharp size={24} className="hover:text-indigo-300" />
                    <SiPhpstorm size={24} className="hover:text-indigo-300" />
                    <SiYarn size={24} className="hover:text-indigo-300" />
                    <SiGit size={24} className="hover:text-indigo-300" />
                    <SiDebian size={24} className="hover:text-indigo-300" />
                    <SiJenkins size={24} className="hover:text-indigo-300" />
                    <SiDatagrip size={24} className="hover:text-indigo-300" />
                    <SiAdobeillustrator
                        size={24}
                        className="hover:text-indigo-300"
                    />
                    <SiAdobephotoshop
                        size={24}
                        className="hover:text-indigo-300"
                    />
                </div>
            </div>
        </>
    )
}
