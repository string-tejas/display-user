import { PageCenter } from "./styles";
import { HashLoader } from "react-spinners";

const Loading = (props) => {
   const { center, size, loading } = props;
   const color = props.color || "#36D7B7"; // turquoise
   if (center) {
      return (
         <PageCenter>
            <HashLoader color={color} loading={loading} size={120} />
         </PageCenter>
      );
   }

   return <HashLoader color={color} loading={loading} size={size || 50} />;
};

export default Loading;
