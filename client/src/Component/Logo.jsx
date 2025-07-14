import  ReactCurvedText from "react-curved-text";

export default function Logo() {
  return (
    <div >
    <ReactCurvedText 
      width={100}
      height={90}
      cx={50}
      cy={50}
      rx={29}
      ry={32}
      startOffset={0}
      reversed={true}
      
      text="Album-Mania * ********* *"
      text-color="blue"
  />
    
    </div>
  );
};
