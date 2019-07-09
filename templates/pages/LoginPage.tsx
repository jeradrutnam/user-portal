/* Custom page overwrite example */

import * as React from "react";

export default class ExtendedLoginPage extends React.Component {
    public render() {
      /**
       * This component is dynamically fetched and rendered
       * on first usage/render
       */
      return <div>Login Custom</div>;
    }
}

// export const ExtendedLoginPage = () => (
//     <>
//         <div>Login Custom</div>
//     </>
// );
