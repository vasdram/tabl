import React from 'react';
import styles from './table.module.css';

export const Table = ({data}) => {
    return(
        <table style={{fontSize: "12px"}} className="table table-bordered mt-5">
             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Вид Оплаты</th>
                <th scope="col">Вид Платежа</th>
                <th scope="col">Дата</th>
                <th scope="col">Дата Списано</th>
                <th scope="col">Код</th>
                <th scope="col">Назначение Платежа</th>
                <th scope="col">Номер</th>
                <th scope="col">ОКАТО</th>
                <th scope="col">Очередность</th>
                <th scope="col">Плательщик БИК</th>
                <th scope="col">Плательщик Банк1</th>
                </tr>
            </thead>
            {data.map((row, idx) => {
                return <tr>
                    <th scope="row">{idx++}</th>
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
                </tr>
            })}
        </table>
    )
}