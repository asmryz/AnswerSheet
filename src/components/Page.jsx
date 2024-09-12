import React from 'react'

export default function Page() {
    return (
        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=windows-1252" />
            <meta name="Generator" content="Microsoft Word 15 (filtered)" />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n      <!--\n      /* Font Definitions */\n      @font-face {\n      \tfont-family: "Cambria Math";\n      \tpanose-1: 2 4 5 3 5 4 6 3 2 4;\n      }\n\n      @font-face {\n      \tfont-family: Calibri;\n      \tpanose-1: 2 15 5 2 2 2 4 3 2 4;\n      }\n\n      /* Style Definitions */\n      p.MsoNormal,\n      li.MsoNormal,\n      div.MsoNormal {\n      \tmargin-top: 0in;\n      \tmargin-right: 0in;\n      \tmargin-bottom: 8.0pt;\n      \tmargin-left: 0in;\n      \tline-height: 107%;\n      \tfont-size: 11.0pt;\n      \tfont-family: "Calibri", sans-serif;\n      }\n\n      .MsoChpDefault {\n      \tfont-family: "Calibri", sans-serif;\n      }\n\n      .MsoPapDefault {\n      \tmargin-bottom: 8.0pt;\n      \tline-height: 107%;\n      }\n\n      @page WordSection1 {\n      \tsize: 8.5in 11.0in;\n      \tmargin: .5in .5in .5in .5in;\n      }\n\n      div.WordSection1 {\n      \tpage: WordSection1;\n      }\n      -->\n    '
                }}
            />
            <div className="WordSection1">
                
                {[...Array(33).keys()].map((line, lineIndex) =>

                    <>
                        <p
                            className="MsoNormal"
                            style={{
                                height: "10px",
                                marginBottom: "0in",
                                lineHeight: "normal",
                                textAutospace: "none"
                            }}
                        >
                            
                        </p>
                        <p
                            className="MsoNormal"
                            style={{
                                marginTop: "0pt",
                                marginRight: "0in",
                                marginBottom: "0pt",
                                marginLeft: "0in",
                                lineHeight: "normal",
                                textAutospace: "none"
                            }}
                        >
                            <b>
                                <span style={{ fontSize: "12pt", fontFamily: '"Arial", sans-serif' }}>&nbsp;
                                    
                                </span>
                            </b>
                        </p>
                        <p
                            className="MsoNormal"
                            style={{ fontSize: "1pt", marginBottom: "0in", lineHeight: "1pt", textAutospace: "none", overflowWrap: 'break-word' }}
                        >
                            <span style={{ fontSize: "1pt", fontFamily: '"Arial", sans-serif' }}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuYAAAABCAMAAAClmZtyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURaenp6enp6ampi2depwAAAACdFJOU5+/25T18AAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABJJREFUKFNjYGQaBaNgeAMmBgBqAQXKGilRUwAAAABJRU5ErkJggg==" />
                            </span>
                        </p>
                        
                    </>
                )}
                <p className="MsoNormal">&nbsp;</p>
            </div>
        </>


    )
}
