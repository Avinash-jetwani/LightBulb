# LightBulb
You’ve been tasked by humanity to stop global warming and, as a diligent engineer, you know you need to measure things you want to change. Hence, you’re starting your earth-saving challenge by writing a tool that can estimate the power draw of a single dimmable smart light bulb. 

When fully lit, the light consumes 5W, and this then drops linearly as the dimmer is turned down. Internally, the light represents its dimmer value as a floating point number between 0.0 and 1.0, inclusive. 

The light outputs a message whenever someone adjusts it. Each message contains a timestamp from the light bulb’s internal clock (in seconds since the start of 1970). There are two types of messages. A TurnOff message indicates that the light has been turned off completely. A Delta message indicates that the brightness has been adjusted; it includes a value for the change in the dimmer value (a floating point number between -1.0 and +1.0 inclusive). 

Your tool consumes these messages, estimates the dimmer value over time, and uses that to estimate the energy consumed by the light. 

But there is a catch.The protocol used to transmit the messages is unreliable. Your tool should deal with the messages being duplicated, lost and/or delivered out of order.
