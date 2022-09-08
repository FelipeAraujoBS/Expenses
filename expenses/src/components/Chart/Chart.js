import styles from "./Chart.module.css"
import ChartBar from "./ChartBar"

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxium = Math.max(...dataPointValues);

   return(
    <div className={styles.chart}>
        {props.dataPoints.map(dataPoint =>
         <ChartBar 
         key={dataPoint.label}
         value={dataPoint.value}
         maxValue={totalMaxium}
         label={dataPoint.label}
         /> 
        )}
    </div>
   );
}

export default Chart;