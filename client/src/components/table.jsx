import React from 'react';
import styles from './table.module.css';

export const Table = ({data}) => {
    return(
        <table className={styles.table}>
            {data.map(row => {
                return <tr>
                    <td contenteditable="true">{row["ВидОплаты"]}</td>
                    <td contenteditable="true">{row["ВидПлатежа"]}</td>
                    <td contenteditable="true">{row["Дата"]}</td>
                    <td contenteditable="true">{row["ДатаСписано"]}</td>
                    <td contenteditable="true">{row["Код"]}</td>
                    <td contenteditable="true" className={styles.pointCell}>{row["НазначениеПлатежа"]}</td>
                    <td contenteditable="true">{row["Номер"]}</td>
                    <td contenteditable="true">{row["ОКАТО"]}</td>
                    <td contenteditable="true">{row["Очередность"]}</td>
                    <td contenteditable="true">{row["ПлательщикБИК"]}</td>
                    <td contenteditable="true">{row["ПлательщикБанк1"]}</td>
                    <td contenteditable="true">{row["ПлательщикИНН"]}</td>
                    <td contenteditable="true">{row["ПлательщикКПП"]}</td>
                    <td contenteditable="true">{row["ПлательщикРасчСчет"]}</td>
                </tr>
            })}
        </table>
    )
}