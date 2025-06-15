import Loading from "@/components/common/loading";
import React from "react";

const LoadingProcess: React.FC = () => {

    return (
        <div className='py-5'><Loading text={"در حال ارسال اطلاعات ..."} /></div>
    )
}
export default LoadingProcess;