
function Board({NUM,TITLE,WRITER,HITCOUNT,CreactAt}){
    return(
    <div>
        (
        <div> {NUM} : <a href="/view">{TITLE}</a> : {WRITER} : {CreactAt} : {HITCOUNT}</div>
        )
    </div>
    )
}