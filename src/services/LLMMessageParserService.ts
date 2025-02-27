/**
 * Types for LLM messages and parsed data
 */
export interface LLMMessage {
  type: 'role' | 'content' | string;
  data: any;
}

export interface RoleData {
  role: string;
  name?: string;
}

export interface ContentData {
  content: string;
  metadata?: Record<string, any>;
}

/**
 * Service for parsing LLM messages
 */
export class LLMMessageParserService {
  /**
   * Parse an LLM message based on its type
   * @param message The LLM message to parse
   * @returns Parsed message data, or null if the message type is not supported
   */
  public parseMessage(message: LLMMessage): RoleData | ContentData | null {
    if (!message || typeof message !== 'object') {
      return null;
    }

    switch (message.type) {
      case 'role':
        return this.parseRoleMessage(message);
      case 'content':
        return this.parseContentMessage(message);
      default:
        return null;
    }
  }

  /**
   * Parse a role type message
   * @param message The role message to parse
   * @returns Parsed role data
   */
  private parseRoleMessage(message: LLMMessage): RoleData {
    const { data } = message;
    return {
      role: data.role || 'unknown',
      name: data.name
    };
  }

  /**
   * Parse a content type message
   * @param message The content message to parse
   * @returns Parsed content data
   */
  private parseContentMessage(message: LLMMessage): ContentData {
    const { data } = message;
    return {
      content: data.content || '',
      metadata: data.metadata || {}
    };
  }
}
