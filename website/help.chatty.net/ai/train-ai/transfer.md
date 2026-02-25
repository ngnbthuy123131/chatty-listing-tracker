# Transfer (AI-to-Human Handoff)

> Source: https://help.chatty.net/ai/train-ai/transfer

## Availability

This feature is available for all users.

## Overview

The transfer feature enables organizations to smoothly transition conversations from AI to human support staff.

### Key Benefits

- Creating seamless experiences when customers move to human assistance
- Gathering important details before agents engage
- Keeping communication consistent throughout transitions

## Use Cases

- **Feedback collection**: Gather customer feedback on AI responses to improve service quality
- **Information gathering**: Collect additional context from customers before connecting them with human agents
- **Team assignment**: Automatically route transferred conversations to the right team members
- **Continued support**: Allow AI to assist customers while they wait for human agents
- **Contact form submission**: Capturing customer data for later follow-up when immediate support isn't available

## Transfer Process

### Customer Experience

1. Customer requests human assistance via chat
2. AI acknowledges the transfer request
3. System routes to an appropriate human agent
4. Previous messages remain accessible
5. Agent joins with complete conversation history

### Team Member Experience

1. Staff receives notification in inbox or email
2. Conversation displays as "transferred from AI"
3. Complete message history is visible
4. Team member can enter the conversation
5. AI ceases responses when human takes over

## Configuration Steps

### Step 1: Enable Automatic Transfer

Activate the default scenario by navigating to **AI assistant** → **Agent instructions** → **Shopping skills** and enabling **When customers ask for human support**.

**Request phrases that trigger transfer:**
- "talk to human", "speak with agent", "I need help from a person"
- Expressions of frustration with AI limitations
- Requests for managerial assistance

**Scenario workflow:**
1. AI identifies transfer request
2. AI asks customer's preferred contact method
3. Customer selects from available options
4. AI confirms the transfer process
5. System assigns to support team using existing auto-assignment settings

### Step 2: Configure Transfer Behavior

**Select transfer timing preferences:**

- **Always transfer**: Assigns to agents based on assignment method
- **Conditional transfer**: Routes only when team members are available or during business hours; otherwise offers self-service alternatives
- **No transfer**: For teams without support staff; directs to self-service options

**Customizable messaging:** You can adjust messages that AI presents before and after transfer, which vary based on your transfer behavior selection.

### Step 3: Set AI Backup Support

Determine if AI continues assisting while customers await human support:

- **Don't allow**: AI becomes inactive immediately after transfer request
- **Allow all the time**: AI stays active until human joins
- **Allow only outside business hours**: AI supports after-hours; remains quiet during operational hours
