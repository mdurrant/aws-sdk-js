import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DirectConnect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DirectConnect.Types.ClientConfiguration)
  config: Config & DirectConnect.Types.ClientConfiguration;
  /**
   * Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  allocateConnectionOnInterconnect(params: DirectConnect.Types.AllocateConnectionOnInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  allocateConnectionOnInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Provisions a private virtual interface to be owned by a different customer. The owner of a connection calls this function to provision a private virtual interface which will be owned by another AWS customer. Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPrivateVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.
   */
  allocatePrivateVirtualInterface(params: DirectConnect.Types.AllocatePrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a private virtual interface to be owned by a different customer. The owner of a connection calls this function to provision a private virtual interface which will be owned by another AWS customer. Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPrivateVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.
   */
  allocatePrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a public virtual interface to be owned by a different customer. The owner of a connection calls this function to provision a public virtual interface which will be owned by another AWS customer. Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.
   */
  allocatePublicVirtualInterface(params: DirectConnect.Types.AllocatePublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Provisions a public virtual interface to be owned by a different customer. The owner of a connection calls this function to provision a public virtual interface which will be owned by another AWS customer. Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.
   */
  allocatePublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Confirm the creation of a hosted connection on an interconnect. Upon creation, the hosted connection is initially in the 'Ordering' state, and will remain in this state until the owner calls ConfirmConnection to confirm creation of the hosted connection.
   */
  confirmConnection(params: DirectConnect.Types.ConfirmConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmConnectionResponse) => void): Request<DirectConnect.Types.ConfirmConnectionResponse, AWSError>;
  /**
   * Confirm the creation of a hosted connection on an interconnect. Upon creation, the hosted connection is initially in the 'Ordering' state, and will remain in this state until the owner calls ConfirmConnection to confirm creation of the hosted connection.
   */
  confirmConnection(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmConnectionResponse) => void): Request<DirectConnect.Types.ConfirmConnectionResponse, AWSError>;
  /**
   * Accept ownership of a private virtual interface created by another customer. After the virtual interface owner calls this function, the virtual interface will be created and attached to the given virtual private gateway, and will be available for handling traffic.
   */
  confirmPrivateVirtualInterface(params: DirectConnect.Types.ConfirmPrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse, AWSError>;
  /**
   * Accept ownership of a private virtual interface created by another customer. After the virtual interface owner calls this function, the virtual interface will be created and attached to the given virtual private gateway, and will be available for handling traffic.
   */
  confirmPrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPrivateVirtualInterfaceResponse, AWSError>;
  /**
   * Accept ownership of a public virtual interface created by another customer. After the virtual interface owner calls this function, the specified virtual interface will be created and made available for handling traffic.
   */
  confirmPublicVirtualInterface(params: DirectConnect.Types.ConfirmPublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse, AWSError>;
  /**
   * Accept ownership of a public virtual interface created by another customer. After the virtual interface owner calls this function, the specified virtual interface will be created and made available for handling traffic.
   */
  confirmPublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse) => void): Request<DirectConnect.Types.ConfirmPublicVirtualInterfaceResponse, AWSError>;
  /**
   * Creates a new connection between the customer network and a specific AWS Direct Connect location. A connection links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with. You can establish connections with AWS Direct Connect locations in multiple regions, but a connection in one region does not provide connectivity to other regions.
   */
  createConnection(params: DirectConnect.Types.CreateConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a new connection between the customer network and a specific AWS Direct Connect location. A connection links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with. You can establish connections with AWS Direct Connect locations in multiple regions, but a connection in one region does not provide connectivity to other regions.
   */
  createConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location. An interconnect is a connection which is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the AWS Direct Connect partner's network to an AWS Direct Connect location over a standard 1 Gbps or 10 Gbps Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router. For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect partner.  This is intended for use by AWS Direct Connect partners only. 
   */
  createInterconnect(params: DirectConnect.Types.CreateInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Interconnect) => void): Request<DirectConnect.Types.Interconnect, AWSError>;
  /**
   * Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location. An interconnect is a connection which is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the AWS Direct Connect partner's network to an AWS Direct Connect location over a standard 1 Gbps or 10 Gbps Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router. For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect partner.  This is intended for use by AWS Direct Connect partners only. 
   */
  createInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Interconnect) => void): Request<DirectConnect.Types.Interconnect, AWSError>;
  /**
   * Creates a new private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface supports sending traffic to a single virtual private cloud (VPC).
   */
  createPrivateVirtualInterface(params: DirectConnect.Types.CreatePrivateVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a new private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface supports sending traffic to a single virtual private cloud (VPC).
   */
  createPrivateVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a new public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon Simple Storage Service (Amazon S3).
   */
  createPublicVirtualInterface(params: DirectConnect.Types.CreatePublicVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Creates a new public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon Simple Storage Service (Amazon S3).
   */
  createPublicVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterface) => void): Request<DirectConnect.Types.VirtualInterface, AWSError>;
  /**
   * Deletes the connection. Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. You need to cancel separately with the providers any services or charges for cross-connects or network circuits that connect you to the AWS Direct Connect location.
   */
  deleteConnection(params: DirectConnect.Types.DeleteConnectionRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deletes the connection. Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. You need to cancel separately with the providers any services or charges for cross-connects or network circuits that connect you to the AWS Direct Connect location.
   */
  deleteConnection(callback?: (err: AWSError, data: DirectConnect.Types.Connection) => void): Request<DirectConnect.Types.Connection, AWSError>;
  /**
   * Deletes the specified interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  deleteInterconnect(params: DirectConnect.Types.DeleteInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteInterconnectResponse) => void): Request<DirectConnect.Types.DeleteInterconnectResponse, AWSError>;
  /**
   * Deletes the specified interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  deleteInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.DeleteInterconnectResponse) => void): Request<DirectConnect.Types.DeleteInterconnectResponse, AWSError>;
  /**
   * Deletes a virtual interface.
   */
  deleteVirtualInterface(params: DirectConnect.Types.DeleteVirtualInterfaceRequest, callback?: (err: AWSError, data: DirectConnect.Types.DeleteVirtualInterfaceResponse) => void): Request<DirectConnect.Types.DeleteVirtualInterfaceResponse, AWSError>;
  /**
   * Deletes a virtual interface.
   */
  deleteVirtualInterface(callback?: (err: AWSError, data: DirectConnect.Types.DeleteVirtualInterfaceResponse) => void): Request<DirectConnect.Types.DeleteVirtualInterfaceResponse, AWSError>;
  /**
   * Returns the LOA-CFA for a Connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeConnectionLoa(params: DirectConnect.Types.DescribeConnectionLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeConnectionLoaResponse) => void): Request<DirectConnect.Types.DescribeConnectionLoaResponse, AWSError>;
  /**
   * Returns the LOA-CFA for a Connection. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeConnectionLoa(callback?: (err: AWSError, data: DirectConnect.Types.DescribeConnectionLoaResponse) => void): Request<DirectConnect.Types.DescribeConnectionLoaResponse, AWSError>;
  /**
   * Displays all connections in this region. If a connection ID is provided, the call returns only that particular connection.
   */
  describeConnections(params: DirectConnect.Types.DescribeConnectionsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Displays all connections in this region. If a connection ID is provided, the call returns only that particular connection.
   */
  describeConnections(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Return a list of connections that have been provisioned on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  describeConnectionsOnInterconnect(params: DirectConnect.Types.DescribeConnectionsOnInterconnectRequest, callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Return a list of connections that have been provisioned on the given interconnect.  This is intended for use by AWS Direct Connect partners only. 
   */
  describeConnectionsOnInterconnect(callback?: (err: AWSError, data: DirectConnect.Types.Connections) => void): Request<DirectConnect.Types.Connections, AWSError>;
  /**
   * Returns the LOA-CFA for an Interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeInterconnectLoa(params: DirectConnect.Types.DescribeInterconnectLoaRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeInterconnectLoaResponse) => void): Request<DirectConnect.Types.DescribeInterconnectLoaResponse, AWSError>;
  /**
   * Returns the LOA-CFA for an Interconnect. The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see Requesting Cross Connects at AWS Direct Connect Locations in the AWS Direct Connect user guide.
   */
  describeInterconnectLoa(callback?: (err: AWSError, data: DirectConnect.Types.DescribeInterconnectLoaResponse) => void): Request<DirectConnect.Types.DescribeInterconnectLoaResponse, AWSError>;
  /**
   * Returns a list of interconnects owned by the AWS account. If an interconnect ID is provided, it will only return this particular interconnect.
   */
  describeInterconnects(params: DirectConnect.Types.DescribeInterconnectsRequest, callback?: (err: AWSError, data: DirectConnect.Types.Interconnects) => void): Request<DirectConnect.Types.Interconnects, AWSError>;
  /**
   * Returns a list of interconnects owned by the AWS account. If an interconnect ID is provided, it will only return this particular interconnect.
   */
  describeInterconnects(callback?: (err: AWSError, data: DirectConnect.Types.Interconnects) => void): Request<DirectConnect.Types.Interconnects, AWSError>;
  /**
   * Returns the list of AWS Direct Connect locations in the current AWS region. These are the locations that may be selected when calling CreateConnection or CreateInterconnect.
   */
  describeLocations(callback?: (err: AWSError, data: DirectConnect.Types.Locations) => void): Request<DirectConnect.Types.Locations, AWSError>;
  /**
   * Describes the tags associated with the specified Direct Connect resources.
   */
  describeTags(params: DirectConnect.Types.DescribeTagsRequest, callback?: (err: AWSError, data: DirectConnect.Types.DescribeTagsResponse) => void): Request<DirectConnect.Types.DescribeTagsResponse, AWSError>;
  /**
   * Describes the tags associated with the specified Direct Connect resources.
   */
  describeTags(callback?: (err: AWSError, data: DirectConnect.Types.DescribeTagsResponse) => void): Request<DirectConnect.Types.DescribeTagsResponse, AWSError>;
  /**
   * Returns a list of virtual private gateways owned by the AWS account. You can create one or more AWS Direct Connect private virtual interfaces linking to a virtual private gateway. A virtual private gateway can be managed via Amazon Virtual Private Cloud (VPC) console or the EC2 CreateVpnGateway action.
   */
  describeVirtualGateways(callback?: (err: AWSError, data: DirectConnect.Types.VirtualGateways) => void): Request<DirectConnect.Types.VirtualGateways, AWSError>;
  /**
   * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before DescribeVirtualInterfaces is called are also returned. If a connection ID is included then only virtual interfaces associated with this connection will be returned. If a virtual interface ID is included then only a single virtual interface will be returned. A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer. If a connection ID is provided, only virtual interfaces provisioned on the specified connection will be returned. If a virtual interface ID is provided, only this particular virtual interface will be returned.
   */
  describeVirtualInterfaces(params: DirectConnect.Types.DescribeVirtualInterfacesRequest, callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterfaces) => void): Request<DirectConnect.Types.VirtualInterfaces, AWSError>;
  /**
   * Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before DescribeVirtualInterfaces is called are also returned. If a connection ID is included then only virtual interfaces associated with this connection will be returned. If a virtual interface ID is included then only a single virtual interface will be returned. A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer. If a connection ID is provided, only virtual interfaces provisioned on the specified connection will be returned. If a virtual interface ID is provided, only this particular virtual interface will be returned.
   */
  describeVirtualInterfaces(callback?: (err: AWSError, data: DirectConnect.Types.VirtualInterfaces) => void): Request<DirectConnect.Types.VirtualInterfaces, AWSError>;
  /**
   * Adds the specified tags to the specified Direct Connect resource. Each Direct Connect resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the Direct Connect resource, this action updates its value.
   */
  tagResource(params: DirectConnect.Types.TagResourceRequest, callback?: (err: AWSError, data: DirectConnect.Types.TagResourceResponse) => void): Request<DirectConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified Direct Connect resource. Each Direct Connect resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the Direct Connect resource, this action updates its value.
   */
  tagResource(callback?: (err: AWSError, data: DirectConnect.Types.TagResourceResponse) => void): Request<DirectConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified Direct Connect resource.
   */
  untagResource(params: DirectConnect.Types.UntagResourceRequest, callback?: (err: AWSError, data: DirectConnect.Types.UntagResourceResponse) => void): Request<DirectConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified Direct Connect resource.
   */
  untagResource(callback?: (err: AWSError, data: DirectConnect.Types.UntagResourceResponse) => void): Request<DirectConnect.Types.UntagResourceResponse, AWSError>;
}
declare namespace DirectConnect.Types {
  export type ASN = number;
  export interface AllocateConnectionOnInterconnectRequest {
    /**
     * Bandwidth of the connection. Example: "500Mbps" Default: None Values: 50M, 100M, 200M, 300M, 400M, or 500M
     */
    bandwidth: Bandwidth;
    /**
     * Name of the provisioned connection. Example: "500M Connection to AWS" Default: None
     */
    connectionName: ConnectionName;
    /**
     * Numeric account Id of the customer for whom the connection will be provisioned. Example: 123443215678 Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * ID of the interconnect on which the connection will be provisioned. Example: dxcon-456abc78 Default: None
     */
    interconnectId: InterconnectId;
    /**
     * The dedicated VLAN provisioned to the connection. Example: 101 Default: None
     */
    vlan: VLAN;
  }
  export interface AllocatePrivateVirtualInterfaceRequest {
    /**
     * The connection ID on which the private virtual interface is provisioned. Default: None
     */
    connectionId: ConnectionId;
    /**
     * The AWS account that will own the new private virtual interface. Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * Detailed information for the private virtual interface to be provisioned. Default: None
     */
    newPrivateVirtualInterfaceAllocation: NewPrivateVirtualInterfaceAllocation;
  }
  export interface AllocatePublicVirtualInterfaceRequest {
    /**
     * The connection ID on which the public virtual interface is provisioned. Default: None
     */
    connectionId: ConnectionId;
    /**
     * The AWS account that will own the new public virtual interface. Default: None
     */
    ownerAccount: OwnerAccount;
    /**
     * Detailed information for the public virtual interface to be provisioned. Default: None
     */
    newPublicVirtualInterfaceAllocation: NewPublicVirtualInterfaceAllocation;
  }
  export type AmazonAddress = string;
  export type BGPAuthKey = string;
  export type Bandwidth = string;
  export type CIDR = string;
  export interface ConfirmConnectionRequest {
    connectionId: ConnectionId;
  }
  export interface ConfirmConnectionResponse {
    connectionState?: ConnectionState;
  }
  export interface ConfirmPrivateVirtualInterfaceRequest {
    virtualInterfaceId: VirtualInterfaceId;
    /**
     * ID of the virtual private gateway that will be attached to the virtual interface.  A virtual private gateway can be managed via the Amazon Virtual Private Cloud (VPC) console or the EC2 CreateVpnGateway action. Default: None
     */
    virtualGatewayId: VirtualGatewayId;
  }
  export interface ConfirmPrivateVirtualInterfaceResponse {
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface ConfirmPublicVirtualInterfaceRequest {
    virtualInterfaceId: VirtualInterfaceId;
  }
  export interface ConfirmPublicVirtualInterfaceResponse {
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface Connection {
    /**
     * The AWS account that will own the new connection.
     */
    ownerAccount?: OwnerAccount;
    connectionId?: ConnectionId;
    connectionName?: ConnectionName;
    connectionState?: ConnectionState;
    region?: Region;
    location?: LocationCode;
    /**
     * Bandwidth of the connection. Example: 1Gbps (for regular connections), or 500Mbps (for hosted connections) Default: None
     */
    bandwidth?: Bandwidth;
    vlan?: VLAN;
    /**
     * The name of the AWS Direct Connect service provider associated with the connection.
     */
    partnerName?: PartnerName;
    /**
     * The time of the most recent call to DescribeConnectionLoa for this Connection.
     */
    loaIssueTime?: LoaIssueTime;
  }
  export type ConnectionId = string;
  export type ConnectionList = Connection[];
  export type ConnectionName = string;
  export type ConnectionState = "ordering"|"requested"|"pending"|"available"|"down"|"deleting"|"deleted"|"rejected"|string;
  export interface Connections {
    /**
     * A list of connections.
     */
    connections?: ConnectionList;
  }
  export interface CreateConnectionRequest {
    location: LocationCode;
    bandwidth: Bandwidth;
    connectionName: ConnectionName;
  }
  export interface CreateInterconnectRequest {
    /**
     * The name of the interconnect. Example: "1G Interconnect to AWS" Default: None
     */
    interconnectName: InterconnectName;
    /**
     * The port bandwidth Example: 1Gbps Default: None Available values: 1Gbps,10Gbps
     */
    bandwidth: Bandwidth;
    /**
     * Where the interconnect is located Example: EqSV5 Default: None
     */
    location: LocationCode;
  }
  export interface CreatePrivateVirtualInterfaceRequest {
    connectionId: ConnectionId;
    /**
     * Detailed information for the private virtual interface to be created. Default: None
     */
    newPrivateVirtualInterface: NewPrivateVirtualInterface;
  }
  export interface CreatePublicVirtualInterfaceRequest {
    connectionId: ConnectionId;
    /**
     * Detailed information for the public virtual interface to be created. Default: None
     */
    newPublicVirtualInterface: NewPublicVirtualInterface;
  }
  export type CustomerAddress = string;
  export interface DeleteConnectionRequest {
    connectionId: ConnectionId;
  }
  export interface DeleteInterconnectRequest {
    interconnectId: InterconnectId;
  }
  export interface DeleteInterconnectResponse {
    interconnectState?: InterconnectState;
  }
  export interface DeleteVirtualInterfaceRequest {
    virtualInterfaceId: VirtualInterfaceId;
  }
  export interface DeleteVirtualInterfaceResponse {
    virtualInterfaceState?: VirtualInterfaceState;
  }
  export interface DescribeConnectionLoaRequest {
    connectionId: ConnectionId;
    /**
     * The name of the APN partner or service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect. Default: None
     */
    providerName?: ProviderName;
    loaContentType?: LoaContentType;
  }
  export interface DescribeConnectionLoaResponse {
    loa?: Loa;
  }
  export interface DescribeConnectionsOnInterconnectRequest {
    /**
     * ID of the interconnect on which a list of connection is provisioned. Example: dxcon-abc123 Default: None
     */
    interconnectId: InterconnectId;
  }
  export interface DescribeConnectionsRequest {
    connectionId?: ConnectionId;
  }
  export interface DescribeInterconnectLoaRequest {
    interconnectId: InterconnectId;
    /**
     * The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect. Default: None
     */
    providerName?: ProviderName;
    loaContentType?: LoaContentType;
  }
  export interface DescribeInterconnectLoaResponse {
    loa?: Loa;
  }
  export interface DescribeInterconnectsRequest {
    interconnectId?: InterconnectId;
  }
  export interface DescribeTagsRequest {
    /**
     * The Amazon Resource Names (ARNs) of the Direct Connect resources.
     */
    resourceArns: ResourceArnList;
  }
  export interface DescribeTagsResponse {
    /**
     * Information about the tags.
     */
    resourceTags?: ResourceTagList;
  }
  export interface DescribeVirtualInterfacesRequest {
    connectionId?: ConnectionId;
    virtualInterfaceId?: VirtualInterfaceId;
  }
  export type ErrorMessage = string;
  export interface Interconnect {
    interconnectId?: InterconnectId;
    interconnectName?: InterconnectName;
    interconnectState?: InterconnectState;
    region?: Region;
    location?: LocationCode;
    bandwidth?: Bandwidth;
    /**
     * The time of the most recent call to DescribeInterconnectLoa for this Interconnect.
     */
    loaIssueTime?: LoaIssueTime;
  }
  export type InterconnectId = string;
  export type InterconnectList = Interconnect[];
  export type InterconnectName = string;
  export type InterconnectState = "requested"|"pending"|"available"|"down"|"deleting"|"deleted"|string;
  export interface Interconnects {
    /**
     * A list of interconnects.
     */
    interconnects?: InterconnectList;
  }
  export interface Loa {
    loaContent?: LoaContent;
    loaContentType?: LoaContentType;
  }
  export type LoaContent = Buffer|Uint8Array|Blob|string;
  export type LoaContentType = "application/pdf"|string;
  export type LoaIssueTime = Date;
  export interface Location {
    /**
     * The code used to indicate the AWS Direct Connect location.
     */
    locationCode?: LocationCode;
    /**
     * The name of the AWS Direct Connect location. The name includes the colocation partner name and the physical site of the lit building.
     */
    locationName?: LocationName;
  }
  export type LocationCode = string;
  export type LocationList = Location[];
  export type LocationName = string;
  export interface Locations {
    /**
     * A list of colocation hubs where network providers have equipment. Most regions have multiple locations available.
     */
    locations?: LocationList;
  }
  export interface NewPrivateVirtualInterface {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    virtualGatewayId: VirtualGatewayId;
  }
  export interface NewPrivateVirtualInterfaceAllocation {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
  }
  export interface NewPublicVirtualInterface {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress: AmazonAddress;
    customerAddress: CustomerAddress;
    routeFilterPrefixes: RouteFilterPrefixList;
  }
  export interface NewPublicVirtualInterfaceAllocation {
    virtualInterfaceName: VirtualInterfaceName;
    vlan: VLAN;
    asn: ASN;
    authKey?: BGPAuthKey;
    amazonAddress: AmazonAddress;
    customerAddress: CustomerAddress;
    routeFilterPrefixes: RouteFilterPrefixList;
  }
  export type OwnerAccount = string;
  export type PartnerName = string;
  export type ProviderName = string;
  export type Region = string;
  export type ResourceArn = string;
  export type ResourceArnList = ResourceArn[];
  export interface ResourceTag {
    /**
     * The Amazon Resource Name (ARN) of the Direct Connect resource.
     */
    resourceArn?: ResourceArn;
    /**
     * The tags.
     */
    tags?: TagList;
  }
  export type ResourceTagList = ResourceTag[];
  export interface RouteFilterPrefix {
    /**
     * CIDR notation for the advertised route. Multiple routes are separated by commas. Example: 10.10.10.0/24,10.10.11.0/24
     */
    cidr?: CIDR;
  }
  export type RouteFilterPrefixList = RouteFilterPrefix[];
  export type RouterConfig = string;
  export interface Tag {
    /**
     * The key of the tag.
     */
    key: TagKey;
    /**
     * The value of the tag.
     */
    value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Direct Connect resource. Example: arn:aws:directconnect:us-east-1:123456789012:dxcon/dxcon-fg5678gh
     */
    resourceArn: ResourceArn;
    /**
     * The list of tags to add.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Direct Connect resource.
     */
    resourceArn: ResourceArn;
    /**
     * The list of tag keys to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type VLAN = number;
  export interface VirtualGateway {
    virtualGatewayId?: VirtualGatewayId;
    virtualGatewayState?: VirtualGatewayState;
  }
  export type VirtualGatewayId = string;
  export type VirtualGatewayList = VirtualGateway[];
  export type VirtualGatewayState = string;
  export interface VirtualGateways {
    /**
     * A list of virtual private gateways.
     */
    virtualGateways?: VirtualGatewayList;
  }
  export interface VirtualInterface {
    /**
     * The AWS account that will own the new virtual interface.
     */
    ownerAccount?: OwnerAccount;
    virtualInterfaceId?: VirtualInterfaceId;
    location?: LocationCode;
    connectionId?: ConnectionId;
    virtualInterfaceType?: VirtualInterfaceType;
    virtualInterfaceName?: VirtualInterfaceName;
    vlan?: VLAN;
    asn?: ASN;
    authKey?: BGPAuthKey;
    amazonAddress?: AmazonAddress;
    customerAddress?: CustomerAddress;
    virtualInterfaceState?: VirtualInterfaceState;
    /**
     * Information for generating the customer router configuration.
     */
    customerRouterConfig?: RouterConfig;
    virtualGatewayId?: VirtualGatewayId;
    routeFilterPrefixes?: RouteFilterPrefixList;
  }
  export type VirtualInterfaceId = string;
  export type VirtualInterfaceList = VirtualInterface[];
  export type VirtualInterfaceName = string;
  export type VirtualInterfaceState = "confirming"|"verifying"|"pending"|"available"|"down"|"deleting"|"deleted"|"rejected"|string;
  export type VirtualInterfaceType = string;
  export interface VirtualInterfaces {
    /**
     * A list of virtual interfaces.
     */
    virtualInterfaces?: VirtualInterfaceList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-10-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = DirectConnect;
