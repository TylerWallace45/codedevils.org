
const getSVG = ({svgID, className}:{
    svgID: number
    className?: string
}) => {
    
    const svgData = [
            ( // rust logo
        <svg key={0} className={className}
            width="800" height="800" viewBox="15.5 15.5 33 33" 
            xmlns="http://www.w3.org/2000/svg">
                <path d="m47.781 31.608-1.343-.832a18.57 18.57 0 0 0-.038-.391l1.154-1.077a.46.46 0 0 
                0-.153-.771l-1.476-.552a16.798 16.798 0 0 0-.115-.381l.92-1.279a.462.462 0 0 
                0-.3-.727l-1.557-.253c-.06-.118-.123-.234-.187-.35l.654-1.435a.46.46 0 0 
                0-.437-.654l-1.579.055a12.482 12.482 0 0 0-.25-.302l.363-1.539a.461.461 0 0 
                0-.556-.556l-1.538.362c-.1-.084-.2-.167-.303-.25l.055-1.578a.46.46 0 0 
                0-.654-.437l-1.435.654a16.712 16.712 0 0 0-.35-.188l-.253-1.556a.462.462 0 0 
                0-.726-.301l-1.28.92a14.31 14.31 0 0 0-.38-.115l-.552-1.476a.461.461 0 0 
                0-.771-.154l-1.077 1.156c-.13-.014-.26-.028-.391-.038l-.832-1.344a.462.462 0 0 
                0-.786 0l-.832 1.344c-.13.01-.261.024-.391.038l-1.077-1.155a.464.464 0 0 
                0-.771.153l-.552 1.476c-.128.037-.255.076-.38.116l-1.28-.921a.46.46 0 0 
                0-.727.3l-.254 1.557c-.117.061-.233.124-.35.188l-1.434-.654a.46.46 0 0 
                0-.654.436l.055 1.58c-.102.082-.203.165-.303.25l-1.538-.363a.464.464 0 0 
                0-.557.556l.363 1.539c-.085.1-.168.2-.25.302l-1.579-.055a.462.462 0 0 
                0-.437.654l.654 1.436c-.063.115-.126.231-.187.35l-1.556.252a.462.462 0 0 
                0-.301.727l.92 1.279c-.04.126-.078.253-.115.38l-1.476.553a.462.462 0 0 
                0-.153.771l1.155 1.077c-.015.13-.028.26-.039.391l-1.343.832a.462.462 0 0 0 
                0 .786l1.343.831c.011.131.024.262.039.392l-1.155 1.077a.462.462 0 0 
                0 .153.771l1.476.552c.037.128.076.255.116.38l-.921 1.28a.462.462 0 0 
                0 .301.726l1.556.253c.061.118.123.235.188.35l-.655 1.435a.462.462 0 0 
                0 .437.654l1.579-.055c.082.103.165.203.25.303l-.363 1.539a.46.46 0 0 
                0 .557.555l1.538-.362c.1.085.201.167.303.249l-.055 1.58a.461.461 0 0 
                0 .654.436l1.435-.654c.115.064.232.127.35.188l.253 1.555a.461.461 0 0 
                0 .727.302l1.279-.922c.126.04.253.08.38.116l.552 1.476a.46.46 0 0 
                0 .771.153l1.078-1.155c.13.015.26.028.391.04l.832 1.343a.463.463 0 0 
                0 .786 0l.831-1.344c.131-.011.262-.024.392-.039l1.077 1.155a.46.46 0 0 
                0 .77-.153l.553-1.476c.127-.036.254-.076.38-.116l1.28.922a.463.463 0 0 
                0 .726-.302l.254-1.556c.117-.06.233-.124.349-.187l1.435.654a.461.461 0 0 
                0 .654-.437l-.055-1.58c.102-.08.203-.163.303-.248l1.538.362a.46.46 0 0 
                0 .556-.555l-.362-1.539c.084-.1.167-.2.249-.303l1.58.055a.46.46 0 0 
                0 .436-.654l-.654-1.435c.064-.115.126-.232.187-.35l1.556-.253a.46.46 0 0 
                0 .301-.726l-.92-1.28a17.5 17.5 0 0 0 .115-.38l1.476-.552a.46.46 0 0 
                0 .153-.771l-1.155-1.077c.014-.13.027-.261.039-.392l1.343-.831a.462.462 0 0 0 
                0-.786zM38.79 42.752a.952.952 0 0 1 .399-1.861.952.952 0 
                0 1-.4 1.861zm-.457-3.087a.866.866 0 0 0-1.028.666l-.477 2.226A11.649 11.649 0 
                0 1 32 43.597c-1.76 0-3.43-.39-4.929-1.087l-.477-2.225a.866.866 0 0 
                0-1.028-.667l-1.965.422a11.68 11.68 0 0 1-1.016-1.197h9.561c.108 
                0 .18-.02.18-.118v-3.382c0-.099-.072-.118-.18-.118H29.35V33.08h3.024c.276 
                0 1.476.079 1.86 1.613.12.471.384 2.006.564 2.497.18.551.912 1.652 1.692 
                1.652h4.764a.977.977 0 0 0 .173-.017c-.33.449-.693.874-1.083 1.27l-2.01-.431zm-13.223 
                3.04a.952.952 0 0 1-.399-1.861.95.95 0 0 1 .398 1.862zm-3.627-14.707a.95.95 0 1 
                1-1.737.771.95.95 0 1 1 1.737-.771zm-1.115 2.643 2.047-.91a.868.868 0 0 
                0 .44-1.145l-.421-.953h1.658v7.474h-3.345a11.714 11.714 0 0 
                1-.38-4.466zm8.983-.726v-2.203h3.948c.204 0 1.44.236 1.44 1.16 0 .767-.948 
                1.043-1.728 1.043h-3.66zM43.7 31.898c0 .292-.011.581-.033.868h-1.2c-.12 
                0-.168.08-.168.197v.551c0 1.298-.732 1.58-1.373 
                1.652-.61.068-1.288-.256-1.371-.63-.36-2.025-.96-2.458-1.908-3.206 1.176-.746 
                2.4-1.848 2.4-3.323 0-1.593-1.092-2.596-1.836-3.088-1.044-.688-2.2-.826-2.512-.826H23.285a11.684 
                11.684 0 0 1 6.545-3.694l1.463 1.535c.331.346.88.36 1.225.028l1.638-1.566a11.71 11.71 0 0 1 
                8.009 5.704l-1.121 2.532a.869.869 0 0 0 .44 1.145l2.159.958c.037.383.056.77.056 1.163zM31.294 
                19.093a.95.95 0 0 1 1.344.031.952.952 0 0 1-.032 1.346.949.949 0 0 1-1.343-.032.953.953 0 0 1 
                .031-1.345zm11.123 8.951a.95.95 0 1 1 1.737.772.95.95 0 1 1-1.737-.772z"/>
        </svg>
        ), (  // bevy logo
        <svg key={1} className={className}
            height="800px" viewBox="0 -4 48 48" width="800px" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="m40.143 15.826h-.011a9.231 9.231 0 0 0 -.462 2.499c-.066 1.747.111 2.81-.09 
            3.942-.2 1.132-.795 2.246-2.308 3.993-1.8 2.08-4.652 3.688-7.948 4.232-.613.392-1.26.75-1.941 
            1.07 2.565.965 5.247 1.018 7.373.32 3.746-1.229 3.456-2.112 5.135-4.684a8.6 8.6 0 0 1 
            1.752-1.937c1.747.762 3.467 1.25 4.54 
            1.13.576-1.337-.015-2.886-.996-4.35.805-2.5-.416-5.003-3.12-5.888-.706-.231-1.34-.34-1.924-.328zm2.03 
            3.67a1.022 1.04 48.68 0 1 .783.342 1.022 1.04 48.68 0 1 -.107 1.455 1.022 1.04 48.68 0 1 -1.456-.08 
            1.022 1.04 48.68 0 1 .107-1.455 1.022 1.04 48.68 0 
            1 .672-.262zm-16.763 11.124c.03.018.063.034.094.052l.097-.037z"/>
            <path d="m26.688.28c-1.464-.008-2.966.576-4.256 1.83-1.695 1.645-2.221 3.126-1.924 
            4.975l.081.507-.506-.083c-3.724-.603-8.332-.298-13.575 1.823 1.542.66 4.37 1.763 7.51 
            3.27l.995.479-1.082.22c-4.145.84-9.064 3.267-13.557 8.563 2.01-.156 6.118-.64 10.402-.633 
            2.381.004 4.728.169 6.64.665 1.912.495 3.65 1.63 3.894 2.461s.106 1.269-.135 1.92-.983 
            1.637-2.01 2.29-2.327 1.222-3.68 1.706c-2.705.969-5.584 1.588-6.855 
            1.706-.27.025-.379.122-.483.311-.104.19-.161.486-.17.797-.01.415.054.632.17.796s.3.23.49.243c7.987.54 
            13.96-1.47 18.297-3.19 4.99-2.288 8.143-6.805 
            8.827-10.872.43-2.549.337-3.798-.076-4.861-.414-1.064-1.207-2.009-2.213-3.812-.646-1.16-1.007-2.297-1.23-3.356l-.048-.223.178-.143c1.849-1.481 
            3.354-3.1 3.9-4.277-1.12-1.193-3.059-1.445-5.227-1.213l-.178.018-.125-.127c-1.155-1.177-2.59-1.78-4.054-1.79zm.65 
            2.754c.635-.01 1.196.431 1.348 1.06.18.74-.265 1.484-.992 1.66a1.367 1.367 0 0 1 
            -1.64-1.023c-.18-.74.264-1.484.991-1.66a1.33 1.33 0 0 1 .292-.037z"/>
            <path d="m36.433 6.26a6.04 6.04 0 0 0 -1.466.155l-.098.026a25.878 25.878 0 0 1 
            -1.846 1.646c.215.947.533 1.933 1.096 2.943.978 1.752 1.784 2.688 2.257 3.904s.555 2.646.116 5.252c-.544 
            3.23-2.51 6.652-5.629 9.177 2.42-.706 4.483-2.008 5.85-3.586 1.473-1.703 1.965-2.666 
            2.138-3.637.172-.97.01-2.034.08-3.84.043-1.163.291-2.18.606-3.075l.076-.215.226-.03c2.017-.261 
            3.84-.776 4.783-1.384-.303-1.361-1.589-2.418-3.292-3.22l-.162-.077-.041-.175c-.54-2.32-2.351-3.815-4.694-3.864zm1.172 
            2.865a1.182 1.205 17.73 0 1 .355.055 1.182 1.205 17.73 0 1 .76 1.507 1.182 1.205 17.73 0 1 
            -1.494.788 1.182 1.205 17.73 0 1 -.759-1.507 1.182 1.205 17.73 0 1 1.138-.843z"/>
        </svg>
        )
    ];
    
    
    if (svgID < svgData.length) { return svgData[svgID] }
    else return (<></>)
}

export default getSVG;