import { FC } from "react"
import { Table } from 'antd';
import { DataProps } from "../utils/types";

interface ContentLayoutProps {
    pageTitle: string
    setModalState: (val: boolean) => void
    dataSource: DataProps[]
    columns: DataProps[]
    fetching: boolean
}

const ContentLayout:FC<ContentLayoutProps> = ({
    children,
    pageTitle,
    setModalState,
    dataSource,
    columns,
    fetching,
}) => {
    return (
        <>
          <div className="card">
            <div className="cardHeader">
                <h1 className="headContent">{pageTitle}s</h1>
                <div className="rightContent">
                    <div className="searchInput">
                        <input type="text" />
                    </div>
                    <button onClick={() => setModalState(true)}>
                        Add {pageTitle}
                    </button>
                </div>
            </div>

            <br/>

            <Table
              dataSource={dataSource} 
              columns={columns} 
              loading={fetching} />

          </div>

          {children}
        </>
    )
}

export default ContentLayout