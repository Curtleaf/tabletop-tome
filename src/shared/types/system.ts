export interface SystemConfiguration {
    stats: {
      statId: number;
      dataType: 'number' | 'string';
      order: number;
      name: string; // Add name for clarity
    }[];
    skills: {
      skillId: number;
      dataType: 'number' | 'string';
      order: number;
      name: string; // Add name for clarity
    }[];
    // ... configurations for other data types (abilities, items, etc.)
  }
  
  export interface SystemRules {
    // Define rules specific to the system (e.g., dice rolling mechanics, character creation rules)
    // You can use interfaces or classes to structure the rules
    // Example:
    diceRolling: {
      type: string; // e.g., "d20", "d100"
      dice: number; // Number of faces on the dice to roll
      quantity: number; // Number of times to roll the dice
      modifier: (statValue: number) => number; // Function to calculate modifier based on stat
    };
    // ... other rules
  }
  
  export interface System {
    id: string; // Unique identifier for the system (e.g., "dnd5e", "pathfinder")
    name: string; // Display name of the system
    configuration: SystemConfiguration;
    rules: SystemRules;
    // ... other metadata (e.g., description, version, author)
  }
  