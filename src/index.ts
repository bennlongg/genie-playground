import { fibonacci } from "./functions";
import { 
  LLMMessageParserService, 
  LLMMessage, 
  RoleData, 
  ContentData 
} from "./services/LLMMessageParserService";

// Export existing functionality
export { fibonacci };

// Export the LLM message parser service and related types
export { 
  LLMMessageParserService, 
  LLMMessage, 
  RoleData, 
  ContentData 
};

// Export a default instance for convenience
export default new LLMMessageParserService();
