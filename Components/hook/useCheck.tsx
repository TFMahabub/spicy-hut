import { useState } from "react";

const useCheck = () => {
    const [check, setCheck] = useState("ami aci");

    return { check, setCheck };
}
export default useCheck;