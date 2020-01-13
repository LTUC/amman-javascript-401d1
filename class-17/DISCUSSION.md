# Reading: TCP Servers

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### Event Queues

Much of the NodeJS architecture is built around the use of events. All objects that emit events in NodeJS are instances of the `EventEmitter` constructor. EventEmitter's are a great way to handle controlling asynchronous events. Functions can be registered as listeners for an event on instances of the EventEmitter class. These instances can emit events and pass the listener's data.

In practical applications, multiple "disconnected" services can communicate with one another using various protocols using proprietary APIs.  Generally, this is done through a central "Hub" server (or Queue) which receives all inbound messages, scrubs the content, and then broadcasts those messages to connected subscribers.

### OSI Model

Programmers and engineers have been able to network computers since the early 1970s. As the needs of networked computers evolved, there where many solutions developed to connect two ore more computers together and share information between them. Over time, several different conceptual models have also been developed to help describe the different networking solutions. In the mid 1980s the _"Open Systems Interconnection Reference Model"_ (OSI model) was developed as a seven layer model. This seven layer OSI model has continued to accurately describe the different processes in computer networking, and is still widely used as a point of reference while working in networked systems today. A developer or engineer is usually responsible for the goals of a specific layer and communicating with the layer above and below. Not every computer network solution uses all seven layers, for example HTTP skips the Presentation and Session layers and lives directly on top of the Transport layer.

| # | Layer | Protocol Data Unit | Function | Examples |
| --- | ---- | ----- | ----- | ----- |
| 7 | Application | Data | Height Level APIs | HTTP, IMAP, POP, SSH |
| 6 | Presentation | Data | Data translating, including encryption, character encoding, and compression | Strings encoded with null terminated strings vs Strings defined by an Integer Length |
| 5 | Session | Data | Manages a session though passing data back and fourth | NetBios and Remote Procedure Protocol (RPC) |
| 4 | **Transport** | Segment / Datagram | Reliable transmission of data between points on a network | TCP and UDP |
| 3 | Network | Packet | Managing the network through addressing, routing, and traffic control | IP and ICMP
| 2 | Data Link | Frame | Reliable transmission of frames between to physical layer nodes | Ethernet and IEEE 802.11 wireless LAN |
| 1 | Physical | bit | transmission and reception of raw data streams over a physical medium | USB, Bluetooth, Ethernet physical layer, SMB, Telephone network modem |

### Internet Protocol Suite

The Internet Protocol Suite is the conceptual model for the protocols used by the internet. It is often referred to as **TCP/IP** because the IP and TCP were the original protocols in the suite. The Internet Protocol Suite is described using four layers - Link, Internet, Transport, and Application. Web developers often reference the Internet Protocol Suite model when discussing network communication and data exchange.

| Layer | Function | Examples |
| ---- | ---- | ---- |
| Application | Provides high level data exchange for use in user application development |  HTTP, SMTP, FTP, DHCP |
| Transport | Provides process to process data exchange | TCP, UDP, µTP|
| Internet | Maintains computer addressing and identification and manages packet routing | IPv4, IPv6, ICMP |
| Link layer | Used to move packets between two different hosts | MAC, ARP, DSL, Ethernet |

### [TCP](https://www.ietf.org/rfc/rfc793.txt)

The Transmission Control Protocol (TCP) is widely used by application layer protocols in the Internet Protocol Suite. TCP creates a two way communication between two hosts and provides reliable, ordered, and error checked byte streams between the applications. TCP data transfers manage network congestion and use flow control to limit the rate a sender transfers data to guarantee reliable delivery. Each IP packet between the hosts carries a single TCP Segment. A TCP segment is made up of header and data sections.

#### TCP HEADER

The TCP Header is used at each end to control the type of interaction being sent. It contains the following information:

```bash
Byte 0: Source port
Byte 3: Destination port
Byte 4: Sequence number
Byte 8: Acknowledgement number
Byte 12: Data Offset, NS flag, and 3 undefined bits
Byte 13: CWR, ECE, URG, ACK, PSH, RST, SYN, and FYN flags
Byte 14: Window size
Byte 16: Checksum
Byte 18: Urgent pointer
Byte 20: Options
```

- a 16 bit `source port`
- a 16 bit `destination port`
- a 32 bit `sequence number` that sets the initial sequence number and manages the accumulated sequence number
- if ACK is set it contains a 32 bit `acknowledgement number` that is the next sequence number that the sender is expecting. It is used for acknowledging the bytes it has so far received
- a 4 bit `data offset` specifies the size of the tcp header in 32 bit words.
- 9 flag bits
  - `NS` - an experimental feature for a nonce sum - a nonce is a random cryptographic number used to prevent people from lying about who they are (authentication)
  - `CWR` - used to acknowledge that a TCP segment with the ECE flag has been received, and the Window has been reduced to alleviate congestion
  - `ECE` - if SYN is 1 it indicates that the peer is ECN capable, other otherwise its used to indicate that there is network congestion.
  - `URG` - indicates that the Urgent pointer filed is significant
  - `ACK` - indicates that the ACK field is significant - all packets after the initial SYN should have this flag set
  - `PSH` - used to ask to push the buffered data to the receiving application.
  - `RST` - used to reset the connection
  - `SYN` - sent only on the first packet sent from each end to synchronize the sequence numbers
  - `FIN` - indicates the last package from a sender, and is used in closing a connection
- a 16 bit `window size`
- a 16 bit `checksum` used for error checking the header
- if URG is set it contains a 16 bit `urgent Pointer`
- a variable 0 to 320 bit (divisible by 32) `options` section

### Connection Establishment

The client sends a SYN packet with an random initial sequence number. The server sends a SYN-ACK packet with the acknowledgment number set to one more than the initial sequence number. The client responds with an ACK and an acknowledgment number incremented by one.

| Client | Server  |
|--------|---------|
| SYN    |         |
|        | SYN-ACK |
| ACK    |         |

### Connection Termination

One end sends a FIN Segment and the other sends an ACK segment followed by a FIN segment. The termination initiation will then respond with an ACK segment.

| Client | Server  |
|--------|---------|
| FIN    |         |
|        | ACK     |
|        | FIN     |
| ACK    |

## Additional Resources

### Videos

- [OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)
- [TCP Handshakes Explained](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

### Bookmark / Skim

- [OSI Model](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/){:target="_blank"}
- [What is TCP](https://searchnetworking.techtarget.com/definition/TCP){:target="_blank"}
- [Build a TCP Server (code only)](https://techbrij.com/node-js-tcp-server-client-promisify){:target="_blank"}
- [Node docs: net module](https://nodejs.org/api/net.html){:target="_blank"}
