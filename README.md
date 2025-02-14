# genie-playground 


> A genie and a programmer are talking. The genie says, “I’ll grant you one wish. What’s it gonna be?” The programmer says, “I want to be famous.” The genie says, “Got it.” and makes the programmer get an infamous NullPointerException in production.


---

* First, clone. Then, install package with: 

```sh
brew install deno
```
> https://deno.land/install


* apply OpenAI API Key in ui/src/app.ts , fetchBalabala() :
```ts

    ...
    if (!myOpenAiApiKey) console.error(`please, add api key`)
  
   const config = new Configuration({
        apiKey: myOpenAiApiKey // <-💔 here
    });
    
    ...
    
```

---

* run by Tauri:
```sh
npm run tauri dev
```

---
run with deno:
```sh
deno run --watch --allow-all do.ts
```



# TOOL CALLS

## Reasoning

The instruction also tells me to look for inline code comments that contain markdown syntax, so I'll do a Keyword Search for `Inline Code Comments With Markdown Syntax`.

## Calls

{
  "type": "keyword_search_made",
  "query": "Inline Code Comments With Markdown Syntax"
}