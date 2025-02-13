export const hightlightOccurrences = (
	content: string,
	occurrence: string
): string => {
	if (!content) throw new Error('content is required')
	if (!occurrence) throw new Error('occurrence is required')

	const highlightedContent = content.replace(
		new RegExp(occurrence, 'g'),
		`*****${occurrence}*****`
	)
	return highlightedContent
}

export const computeAverageExcludingString = (array: (number | string)[]): any => {
  if (!(array instanceof Array)) throw new Error('Only array type is allowed')
  if (array.length === 0) throw new Error('Empty array not allowed')

  array.forEach((item) => {
    if (typeof item !== 'number' && typeof item !== 'string') throw TypeError('unsupported type')
  })
	const numericValues = array.filter((item) => typeof item === 'number') as  number[]
	const total = numericValues.reduce((acc, curr) => acc + curr, 0)
	if(!numericValues.length) return {}
	const average = total / numericValues.length
	return { average }
}


export const removeFalsyValuesFromArray = (arr: any[]) => {
  if (!(arr instanceof Array)) throw new Error('Only array type is allowed')
  if (arr.length === 0) throw new Error('Empty array not allowed')
  return arr.filter((item) => item);
}


export const getValueOfExpression = (
	values: { [key: string]: number },
	expression: string
) => {
	if (typeof values !== 'object') {
		throw new Error('values is required')
	}
	if (!expression) throw new Error('expression is required')

	const matches = expression.match(/{{\s*[\w\.]+\s*}}/g)
	if (!matches) throw new Error('No objects defined in expression')

	matches.map((match) => {
		const key = match.replace(/[{}]/g, '').trim()
		if (!values?.[key]) throw new Error(`No value defined for ${key}`)
		expression = expression.replace(match, values[key])
	})

	return eval(expression)
}


export const isObject = (thing: unknown): boolean => {
	return typeof thing === 'object' && thing !== null && !Array.isArray(thing)
}

export const containsValidProperties = (
	object: unknown,
	validProperties: string[]
): boolean => {
	if (!isObject(object)) return false

	const objectProperties = Object.keys(object as any)
	const validator = new Set([...validProperties, ...objectProperties])

	return validator.size === validProperties.length
}

export const cacheResults = (fn: Function): Function => {
	if (typeof fn !== 'function')
		throw new Error(`Expected function but received ${typeof fn}.`)
	const cacheStore = new Map()
	return function (this: any, ...args: any) {
		const cacheKey = JSON.stringify(args)
		if (cacheStore.has(cacheKey)) {
			return cacheStore.get(cacheKey)
		}
		const result = fn.call(this, ...args)
		cacheStore.set(cacheKey, result)
		return result
	}
}

export const capitalizeOnlyFirstLetter = (
	sentence: string,
	remainingToLowercase: boolean
) => {
	if (typeof sentence !== 'string') throw new Error('Only string is allowed')
	if (!sentence?.[0]) throw new Error('Sentence is empty')

	return (
		sentence?.[0]?.toUpperCase() +
		(remainingToLowercase
			? sentence
					.slice(1)
					.split('')
					.map((char) => (char >= 'A' && char <= 'Z' ? char.toLowerCase() : char))
					.join('')
			: sentence.slice(1))
	)
}

export const doubleNumbersAfterPosition = (
	numArray: any,
	num: any
): Array<number> => {
	if (!Array.isArray(numArray))
		throw new Error('First argument must be an array')
	if (!numArray.every((element) => typeof element === 'number'))
		throw new Error('Flow must be all numbers')
	if (typeof num !== 'number')
		throw new Error('Second argument must be of type number')
	if (numArray.every((element) => element !== num))
		throw new Error('Anchor number not part of array')

	const output = numArray.flatMap((element) =>
		element <= num ? element : [element, element]
	)

	return output
}

export const flattenArray = (arr: any[]): any[] => {
  if (!(arr instanceof Array)) throw new Error('Only array type is allowed')
  return arr.flat(Infinity)
}


export const isArraySorted = (array: number[]): boolean => {
  if (!(array instanceof Array)) throw new Error('Only array type is allowed')
  if (array.length === 0) throw new Error('Empty array not allowed')
   // Check if the array is sorted in ascending order
   for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
   // Check if the array is sorted in descending order
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      return false;
    }
  }

  return true
}

export const binarySearch = (arr: number[],val: number): number => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let middleIndex = leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    if (arr[middleIndex] === val) return middleIndex;
    if (val < arr[middleIndex]) rightPointer = middleIndex - 1;
    else leftPointer = middleIndex + 1; 
  }

  return -1;
}