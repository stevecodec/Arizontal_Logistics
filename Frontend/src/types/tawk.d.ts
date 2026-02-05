// Tawk.to API TypeScript Definitions
// This provides type safety and IntelliSense for Tawk.to API

interface TawkAPI {
  /**
   * Maximize (open) the chat widget
   */
  maximize(): void;

  /**
   * Minimize (close) the chat widget
   */
  minimize(): void;

  /**
   * Toggle the chat widget (open/close)
   */
  toggle(): void;

  /**
   * Popup the chat widget (show with animation)
   */
  popup(): void;

  /**
   * Get current page URL
   */
  getWindowType(): string;

  /**
   * Show the widget (if hidden)
   */
  showWidget(): void;

  /**
   * Hide the widget completely
   */
  hideWidget(): void;

  /**
   * Toggle widget visibility
   */
  toggleVisibility(): void;

  /**
   * Get current chat status
   */
  getStatus(): 'online' | 'away' | 'offline';

  /**
   * Check if chat is currently maximized
   */
  isChatMaximized(): boolean;

  /**
   * Check if chat is ongoing
   */
  isChatOngoing(): boolean;

  /**
   * Check if visitor is chatting
   */
  isChatHidden(): boolean;

  /**
   * Set visitor attributes
   */
  setAttributes(
    attributes: {
      name?: string;
      email?: string;
      hash?: string;
      [key: string]: string | number | boolean | undefined;
    },
    callback?: (error?: any) => void
  ): void;

  /**
   * Add tags to the conversation
   */
  addTags(tags: string[], callback?: (error?: any) => void): void;

  /**
   * Remove tags from the conversation
   */
  removeTags(tags: string[], callback?: (error?: any) => void): void;

  /**
   * Add a custom event
   */
  addEvent(
    event: string,
    metadata?: Record<string, any>,
    callback?: (error?: any) => void
  ): void;

  /**
   * End current chat
   */
  endChat(): void;

  /**
   * Set custom style
   */
  customStyle(styles: Record<string, string>): void;

  /**
   * Callback when chat is maximized
   */
  onChatMaximized?: () => void;

  /**
   * Callback when chat is minimized
   */
  onChatMinimized?: () => void;

  /**
   * Callback when chat is started
   */
  onChatStarted?: () => void;

  /**
   * Callback when chat is ended
   */
  onChatEnded?: () => void;

  /**
   * Callback when pre-chat survey is submitted
   */
  onPrechatSubmit?: (data: Record<string, any>) => void;

  /**
   * Callback when offline form is submitted
   */
  onOfflineSubmit?: (data: Record<string, any>) => void;

  /**
   * Callback when chat message is sent
   */
  onChatMessageVisitor?: (message: string) => void;

  /**
   * Callback when agent sends a message
   */
  onChatMessageAgent?: (message: string) => void;

  /**
   * Callback when chat message is sent by system
   */
  onChatMessageSystem?: (message: string) => void;

  /**
   * Callback when agent joins chat
   */
  onAgentJoinChat?: (data: { name: string; position: string }) => void;

  /**
   * Callback when agent leaves chat
   */
  onAgentLeaveChat?: (data: { name: string; position: string }) => void;

  /**
   * Callback when chat satisfaction is submitted
   */
  onChatSatisfaction?: (satisfaction: 'good' | 'bad') => void;

  /**
   * Callback when visitor name is received
   */
  onVisitorNameReceived?: (visitorName: string) => void;

  /**
   * Callback when file is uploaded
   */
  onFileUpload?: (link: string) => void;

  /**
   * Callback when tags are updated
   */
  onTagsUpdated?: (tags: string[]) => void;

  /**
   * Callback when unread count changes
   */
  onUnreadCountChanged?: (count: number) => void;

  /**
   * Callback when status changes
   */
  onStatusChange?: (status: 'online' | 'away' | 'offline') => void;

  /**
   * Callback before Tawk.to loads
   */
  onBeforeLoad?: () => void;

  /**
   * Callback when Tawk.to loads
   */
  onLoad?: () => void;
}

// Extend Window interface
declare global {
  interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
  }
}

export {};
