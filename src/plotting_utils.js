// Importing necessary modules from d3 library
import {
  select,
  scaleLinear,
  axisBottom,
  axisLeft,
  scaleBand,
  scaleOrdinal,
  pie,
  arc,
  schemeCategory10
} from 'd3';

/**
 * Utility function to plot a line graph.
 * @param {Array<number>} dataPoints Array of y-values for each x-coordinate.
 * @param {Object} [options] Configuration options for the graph.
 * @param {string} [options.xAxisLabel='X-axis'] Label for x-axis.
 * @param {string} [options.yAxisLabel='Y-axis'] Label for y-axis.
 * @param {string} [options.title='Line Graph'] Title of the graph.
 */
export function plotLineGraph(dataPoints, options = {}) {
  const {
    xAxisLabel = 'X-axis',
    yAxisLabel = 'Y-axis',
    title = 'Line Graph',
  } = options;

  // Select target HTML element
  const targetElement = select('#root');

  // Clear any existing content
  targetElement.selectAll('*').remove();

  // Set up dimensions
  const width = 800;
  const height = 400;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };

  // Create SVG container
  const svg = targetElement.append('svg')
    .attr('width', width)
    .attr('height', height);

  // Define scales
  const xScale = scaleLinear()
    .domain([0, dataPoints.length - 1])
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain([0, Math.max(...dataPoints)])
    .range([height - margin.bottom, margin.top]);

  // Create axes
  const xAxis = axisBottom(xScale);
  const yAxis = axisLeft(yScale);

  // Append axes
  svg.append('g')
    .attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(xAxis);

  svg.append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(yAxis);

 // Create line generator
const lineGenerator = d3.line()
.x((d, i) => xScale(i))
.y(d => yScale(d));

// Append line path
svg.append('path')
.datum(dataPoints)
.attr('fill', 'none')
.attr('stroke', 'steelblue')
.attr('stroke-width', 2)
.attr('d', lineGenerator);

// Add X-Axis label
svg.append('text')
.attr('text-anchor', 'middle')
.attr('x', width /2 )
.attr('y', height)
.text(xAxisLabel);

// Add Y-Axis label
svg.append("text")
.attr("transform", "rotate(-90)")
.attr("x",0 -(height /2 ))
.attr("y",15 )
.attr("dy", "-5.1em")
.style("text-anchor", "middle")
.text(yAxisLabel);
}

/**
 * Utility function to plot a pie chart.
 * @param {Object} categoryValues Object whose keys are category names and values are corresponding numbers.
 * @param {Object} [options] Configuration options for the chart.
 * @param {Array<string>} [options.colors] Array of colors to use for each slice (optional).
 * @param {boolean} [options.showLegend=true] Whether to show legend (default: true).
 * @param {string} [options.title='Pie Chart'] Title of the chart (optional).
 */
export function plotPieChart(categoryValues, options = {}) {
const {
colors,
showLegend = true,
title = 'Pie Chart',
} = options;

// Select target HTML element
const targetElement = select('#root');

// Clear any existing content
targetElement.selectAll('*').remove();

// Set up dimensions
const width =600 ;
const height =400 ;
const radius= Math.min(width,height )/2;

// Create SVG container
const svg=targetElement.append( 'svg')
.attr( 'width',width )
.attr( 'height',height )
.append( 'g')
.attr( 'transform',"translate(${width /2 },${height /2 })");

// Define color scale
const colorScale=scaleOrdinal(colors || schemeCategory10);

// Compute pie slices
const pieData=pie().value(d =>d.value)(Object.entries(categoryValues).map(([key,value]) =>({key,value})));

// Define arc generator
const arcGenerator=arc()
.outerRadius(radius)
.innerRadius(0);

// Append slices as paths
svg.selectAll( '.arc')
.data(pieData)
.enter()
.append( 'path')
.attr( 'd',arcGenerator)
.style( 'fill',d =>colorScale(d.data.key))
.style( 'stroke','#fff');

// Optionally add legend if showLegend is true...
if(showLegend) {
}
// Add title if provided...
if(title !=='') {
svg.append("text")
.attr("x",0)
.attr("y",-height /2 +20)
.attr("text-anchor","middle")
.style("font-size","24px")
.text(title);
}
}
