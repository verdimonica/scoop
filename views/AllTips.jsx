const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function AllTips(props) {
  return (
    <Layout title="All Our Tips" user={props.user}>
      <h1>List of Tips</h1>
      {
        props.tips.map((tip, i) => {
          console.log(props.tips)
         return (
           <div>
             <h3 key={i}>{tip.title}</h3>
             <p>{tip.description}</p>
             <p>{tip.text}</p>
           </div>
         )
      } )
      }
    </Layout>
   
  );
}

module.exports = AllTips;