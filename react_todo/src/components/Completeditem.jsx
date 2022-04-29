
export const Completeditem = ({ letest, showdata }) => {

    return <div>
        <button onClick={showdata} id="btn2">Show Completed Item</button>

        { letest.map((e) => {

            return <h2>{e.title}</h2>
        })
        }

    </div>
}