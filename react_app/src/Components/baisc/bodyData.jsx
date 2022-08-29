import React from 'react';
import CurrentSpace from "../operations/currentSpace";
import CreateList from "../operations/createList";

function BodyData({spaces, spaceName, setSpaceName}) {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '6px',
                width: '81vw',
                maxWidth: '81vw',
                margin: '.5rem .4rem 0 .3rem',
                height: '40vw',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0 1px 4px',
                overflow: 'auto',
                position: 'relative',
                overflowY: 'hidden',
                overflowX: "-moz-hidden-unscrollable"
            }}>
                <div style={{
                    height: '2.8rem',
                    width: '81vw',
                    backgroundColor: 'rgba(5,191,218,0.67)',
                    position: 'fixed',
                    borderRadius: '6px 6px 0 0',
                }}>
                    {!spaceName
                        ? <div style={{display: 'flex', flexDirection: "column", margin: '5rem 18rem', width: '100%'}}>
                            <img width='40%'
                               src="https://app-cdn.clickup.com/sanbath_chill.8dba001986c14eaa.png"
                               alt="background"
                            />
                            <span style={{margin: '3rem 7rem', fontWeight: 'bold'}}>connect to Work-Space</span>
                        </div>
                        : null}
                    {spaces.map(space => {
                        return spaceName === space.name
                            ?
                            <CurrentSpace key={space.id} space={space} setSpaceName={setSpaceName}/>
                            : null
                    })}
                </div>
                {spaces.map(space => {
                    return spaceName === space.name
                        ? <CreateList key={space.id} space={space}/>
                        : null
                })}
            </div>
        </>
    );
}

export default BodyData;