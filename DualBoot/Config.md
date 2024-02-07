# Config File
## Introduction
Config File defines the Stack info used to patch kernel.  
If you do not need it, set the too values to 0.

## Format
  - A config file should only contain the following contents.
  ```
  StackBase=0x00000000
  StackSize=0x00000000
  ```
  - The value after `=` must be hex number.
  - Config file not in this format will cause unexceptional behavior.