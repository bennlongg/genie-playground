## Getting Started

This is a collection of functions for easy use of openai's chatgpt api, which is based on the exponential tree algorithm to create conversation.

Altogther universal different size token segmenter is included.

All sources are linked in the header of the corresponding files.


## Usage

  openai API key and org must be set in .env file.
  
```properties
OPENAI_ORG=org-openai
OPENAI_KEY=sk-openaiKey
```

```python
from functions import ask
from utilities import create_context
context = create_context(()-> list[dict], 'Make a prompt from specified sources')

start_time = time.time()
def pysources()-> list[dict]:
    return [local_sources[3].split(), list(map(lambda a: "".join(a), local_sources[5].split())), 
    
            local_sources[6].split(), ["summarise"]]

print(ask(openai,  #openai library instance created after key and org was loaded 
          30, #30 tokens used by user prompt before each conversation run
          ['Which functions could you reuse form this library'], #user's message
          context)) #context making class
end_time = time.time()
print('Runtime of the program is {}'.format(end_time-start_time)) #time comsumption measurment
```


## Installation


```shell
$ python -m venv .venv
```

```shell
$ source .venv/bin/activate
$ pip install -r requirements.txt
```

Clone the repo with

```shell
$ git clone https://github.com/HeineRi/numpyfuns
```

## Contributing

If you find this project useful.

Please consider contributing to it.

Either by creating an ISSUE with feature request or by becoming a contributor.

For security reasons: never communicate .env sensitive data in a public channel.

## Licence

MIT license. see LICENSE file for details