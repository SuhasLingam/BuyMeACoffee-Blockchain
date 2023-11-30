import { memo, useEffect, useState } from "react";

import "../assets/css/memo.css";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);

  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.printMemo();
      console.log(memos);
      setMemos(memos);
    };

    contract && memosMessage();
  }, [contract]);

  return (
    <>
      <table>
        <div className="t-names">
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>from</th>
          </tr>
        </div>
        {memos.map((memo) => {
          return (
            <div>
              <tr>
                <td>{memo.name}</td>
                <td>{memo.message}</td>
                <td>{memo.from}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </>
  );
};

export default Memos;
