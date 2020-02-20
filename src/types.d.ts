export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};

export type Author = {
  readonly __typename?: 'Author',
  readonly name: Scalars['String'],
  readonly url: Scalars['String'],
};

export type AuthorFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly url?: Maybe<StringQueryOperatorInput>,
};

export type BooleanQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Boolean']>,
  readonly ne?: Maybe<Scalars['Boolean']>,
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>,
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>,
  readonly ne?: Maybe<Scalars['Date']>,
  readonly gt?: Maybe<Scalars['Date']>,
  readonly gte?: Maybe<Scalars['Date']>,
  readonly lt?: Maybe<Scalars['Date']>,
  readonly lte?: Maybe<Scalars['Date']>,
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>,
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  readonly __typename?: 'Directory',
  readonly sourceInstanceName: Scalars['String'],
  readonly absolutePath: Scalars['String'],
  readonly relativePath: Scalars['String'],
  readonly extension: Scalars['String'],
  readonly size: Scalars['Int'],
  readonly prettySize: Scalars['String'],
  readonly modifiedTime: Scalars['Date'],
  readonly accessTime: Scalars['Date'],
  readonly changeTime: Scalars['Date'],
  readonly birthTime: Scalars['Date'],
  readonly root: Scalars['String'],
  readonly dir: Scalars['String'],
  readonly base: Scalars['String'],
  readonly ext: Scalars['String'],
  readonly name: Scalars['String'],
  readonly relativeDirectory: Scalars['String'],
  readonly dev: Scalars['Int'],
  readonly mode: Scalars['Int'],
  readonly nlink: Scalars['Int'],
  readonly uid: Scalars['Int'],
  readonly gid: Scalars['Int'],
  readonly rdev: Scalars['Int'],
  readonly ino: Scalars['Float'],
  readonly atimeMs: Scalars['Float'],
  readonly mtimeMs: Scalars['Float'],
  readonly ctimeMs: Scalars['Float'],
  readonly atime: Scalars['Date'],
  readonly mtime: Scalars['Date'],
  readonly ctime: Scalars['Date'],
  readonly birthtime?: Maybe<Scalars['Date']>,
  readonly birthtimeMs?: Maybe<Scalars['Float']>,
  readonly blksize?: Maybe<Scalars['Int']>,
  readonly blocks?: Maybe<Scalars['Int']>,
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  readonly __typename?: 'DirectoryConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<DirectoryEdge>,
  readonly nodes: ReadonlyArray<Directory>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  readonly __typename?: 'DirectoryEdge',
  readonly next?: Maybe<Directory>,
  readonly node: Directory,
  readonly previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  readonly absolutePath?: Maybe<StringQueryOperatorInput>,
  readonly relativePath?: Maybe<StringQueryOperatorInput>,
  readonly extension?: Maybe<StringQueryOperatorInput>,
  readonly size?: Maybe<IntQueryOperatorInput>,
  readonly prettySize?: Maybe<StringQueryOperatorInput>,
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>,
  readonly accessTime?: Maybe<DateQueryOperatorInput>,
  readonly changeTime?: Maybe<DateQueryOperatorInput>,
  readonly birthTime?: Maybe<DateQueryOperatorInput>,
  readonly root?: Maybe<StringQueryOperatorInput>,
  readonly dir?: Maybe<StringQueryOperatorInput>,
  readonly base?: Maybe<StringQueryOperatorInput>,
  readonly ext?: Maybe<StringQueryOperatorInput>,
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>,
  readonly dev?: Maybe<IntQueryOperatorInput>,
  readonly mode?: Maybe<IntQueryOperatorInput>,
  readonly nlink?: Maybe<IntQueryOperatorInput>,
  readonly uid?: Maybe<IntQueryOperatorInput>,
  readonly gid?: Maybe<IntQueryOperatorInput>,
  readonly rdev?: Maybe<IntQueryOperatorInput>,
  readonly ino?: Maybe<FloatQueryOperatorInput>,
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly atime?: Maybe<DateQueryOperatorInput>,
  readonly mtime?: Maybe<DateQueryOperatorInput>,
  readonly ctime?: Maybe<DateQueryOperatorInput>,
  readonly birthtime?: Maybe<DateQueryOperatorInput>,
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly blksize?: Maybe<IntQueryOperatorInput>,
  readonly blocks?: Maybe<IntQueryOperatorInput>,
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  readonly __typename?: 'DirectoryGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<DirectoryEdge>,
  readonly nodes: ReadonlyArray<Directory>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String'],
  readonly shadow: Scalars['String'],
  readonly opacity?: Maybe<Scalars['Int']>,
};

export type FeaturedImage = {
  readonly __typename?: 'FeaturedImage',
  readonly src: File,
  readonly description?: Maybe<Scalars['String']>,
};

export type FeaturedImageFilterInput = {
  readonly src?: Maybe<FileFilterInput>,
  readonly description?: Maybe<StringQueryOperatorInput>,
};

export type File = Node & {
  readonly __typename?: 'File',
  readonly sourceInstanceName: Scalars['String'],
  readonly absolutePath: Scalars['String'],
  readonly relativePath: Scalars['String'],
  readonly extension: Scalars['String'],
  readonly size: Scalars['Int'],
  readonly prettySize: Scalars['String'],
  readonly modifiedTime: Scalars['Date'],
  readonly accessTime: Scalars['Date'],
  readonly changeTime: Scalars['Date'],
  readonly birthTime: Scalars['Date'],
  readonly root: Scalars['String'],
  readonly dir: Scalars['String'],
  readonly base: Scalars['String'],
  readonly ext: Scalars['String'],
  readonly name: Scalars['String'],
  readonly relativeDirectory: Scalars['String'],
  readonly dev: Scalars['Int'],
  readonly mode: Scalars['Int'],
  readonly nlink: Scalars['Int'],
  readonly uid: Scalars['Int'],
  readonly gid: Scalars['Int'],
  readonly rdev: Scalars['Int'],
  readonly ino: Scalars['Float'],
  readonly atimeMs: Scalars['Float'],
  readonly mtimeMs: Scalars['Float'],
  readonly ctimeMs: Scalars['Float'],
  readonly atime: Scalars['Date'],
  readonly mtime: Scalars['Date'],
  readonly ctime: Scalars['Date'],
  readonly birthtime?: Maybe<Scalars['Date']>,
  readonly birthtimeMs?: Maybe<Scalars['Float']>,
  readonly blksize?: Maybe<Scalars['Int']>,
  readonly blocks?: Maybe<Scalars['Int']>,
  readonly publicURL?: Maybe<Scalars['String']>,
  readonly childImageSharp?: Maybe<ImageSharp>,
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
  readonly childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  readonly __typename?: 'FileConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<FileEdge>,
  readonly nodes: ReadonlyArray<File>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  readonly __typename?: 'FileEdge',
  readonly next?: Maybe<File>,
  readonly node: File,
  readonly previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterCategories = 'childMarkdownRemark___frontmatter___categories',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterFeaturedImageDescription = 'childMarkdownRemark___frontmatter___featuredImage___description',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterDraft = 'childMarkdownRemark___frontmatter___draft',
  ChildMarkdownRemarkFrontmatterDropcap = 'childMarkdownRemark___frontmatter___dropcap',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFieldsTitle = 'childMarkdownRemark___fields___title',
  ChildMarkdownRemarkFieldsLayout = 'childMarkdownRemark___fields___layout',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  readonly sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  readonly absolutePath?: Maybe<StringQueryOperatorInput>,
  readonly relativePath?: Maybe<StringQueryOperatorInput>,
  readonly extension?: Maybe<StringQueryOperatorInput>,
  readonly size?: Maybe<IntQueryOperatorInput>,
  readonly prettySize?: Maybe<StringQueryOperatorInput>,
  readonly modifiedTime?: Maybe<DateQueryOperatorInput>,
  readonly accessTime?: Maybe<DateQueryOperatorInput>,
  readonly changeTime?: Maybe<DateQueryOperatorInput>,
  readonly birthTime?: Maybe<DateQueryOperatorInput>,
  readonly root?: Maybe<StringQueryOperatorInput>,
  readonly dir?: Maybe<StringQueryOperatorInput>,
  readonly base?: Maybe<StringQueryOperatorInput>,
  readonly ext?: Maybe<StringQueryOperatorInput>,
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly relativeDirectory?: Maybe<StringQueryOperatorInput>,
  readonly dev?: Maybe<IntQueryOperatorInput>,
  readonly mode?: Maybe<IntQueryOperatorInput>,
  readonly nlink?: Maybe<IntQueryOperatorInput>,
  readonly uid?: Maybe<IntQueryOperatorInput>,
  readonly gid?: Maybe<IntQueryOperatorInput>,
  readonly rdev?: Maybe<IntQueryOperatorInput>,
  readonly ino?: Maybe<FloatQueryOperatorInput>,
  readonly atimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly mtimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly ctimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly atime?: Maybe<DateQueryOperatorInput>,
  readonly mtime?: Maybe<DateQueryOperatorInput>,
  readonly ctime?: Maybe<DateQueryOperatorInput>,
  readonly birthtime?: Maybe<DateQueryOperatorInput>,
  readonly birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  readonly blksize?: Maybe<IntQueryOperatorInput>,
  readonly blocks?: Maybe<IntQueryOperatorInput>,
  readonly publicURL?: Maybe<StringQueryOperatorInput>,
  readonly childImageSharp?: Maybe<ImageSharpFilterInput>,
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
  readonly childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
  readonly __typename?: 'FileGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<FileEdge>,
  readonly nodes: ReadonlyArray<File>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>,
  readonly ne?: Maybe<Scalars['Float']>,
  readonly gt?: Maybe<Scalars['Float']>,
  readonly gte?: Maybe<Scalars['Float']>,
  readonly lt?: Maybe<Scalars['Float']>,
  readonly lte?: Maybe<Scalars['Float']>,
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>,
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>,
};

export type Frontmatter = {
  readonly __typename?: 'Frontmatter',
  readonly title: Scalars['String'],
  readonly categories: ReadonlyArray<Scalars['String']>,
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>,
  readonly featuredImage?: Maybe<FeaturedImage>,
  readonly date?: Maybe<Scalars['Date']>,
  readonly description?: Maybe<Scalars['String']>,
  readonly draft?: Maybe<Scalars['Boolean']>,
  readonly dropcap?: Maybe<Scalars['Boolean']>,
};


export type FrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FrontmatterFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>,
  readonly categories?: Maybe<StringQueryOperatorInput>,
  readonly tags?: Maybe<StringQueryOperatorInput>,
  readonly featuredImage?: Maybe<FeaturedImageFilterInput>,
  readonly date?: Maybe<DateQueryOperatorInput>,
  readonly description?: Maybe<StringQueryOperatorInput>,
  readonly draft?: Maybe<BooleanQueryOperatorInput>,
  readonly dropcap?: Maybe<BooleanQueryOperatorInput>,
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  readonly __typename?: 'ImageSharp',
  readonly fixed?: Maybe<ImageSharpFixed>,
  readonly resolutions?: Maybe<ImageSharpResolutions>,
  readonly fluid?: Maybe<ImageSharpFluid>,
  readonly sizes?: Maybe<ImageSharpSizes>,
  readonly original?: Maybe<ImageSharpOriginal>,
  readonly resize?: Maybe<ImageSharpResize>,
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  readonly __typename?: 'ImageSharpConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<ImageSharpEdge>,
  readonly nodes: ReadonlyArray<ImageSharp>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  readonly __typename?: 'ImageSharpEdge',
  readonly next?: Maybe<ImageSharp>,
  readonly node: ImageSharp,
  readonly previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  readonly fixed?: Maybe<ImageSharpFixedFilterInput>,
  readonly resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  readonly fluid?: Maybe<ImageSharpFluidFilterInput>,
  readonly sizes?: Maybe<ImageSharpSizesFilterInput>,
  readonly original?: Maybe<ImageSharpOriginalFilterInput>,
  readonly resize?: Maybe<ImageSharpResizeFilterInput>,
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  readonly __typename?: 'ImageSharpFixed',
  readonly base64?: Maybe<Scalars['String']>,
  readonly tracedSVG?: Maybe<Scalars['String']>,
  readonly aspectRatio?: Maybe<Scalars['Float']>,
  readonly width: Scalars['Float'],
  readonly height: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp?: Maybe<Scalars['String']>,
  readonly srcSetWebp?: Maybe<Scalars['String']>,
  readonly originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>,
  readonly width?: Maybe<FloatQueryOperatorInput>,
  readonly height?: Maybe<FloatQueryOperatorInput>,
  readonly src?: Maybe<StringQueryOperatorInput>,
  readonly srcSet?: Maybe<StringQueryOperatorInput>,
  readonly srcWebp?: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>,
  readonly originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  readonly __typename?: 'ImageSharpFluid',
  readonly base64?: Maybe<Scalars['String']>,
  readonly tracedSVG?: Maybe<Scalars['String']>,
  readonly aspectRatio: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp?: Maybe<Scalars['String']>,
  readonly srcSetWebp?: Maybe<Scalars['String']>,
  readonly sizes: Scalars['String'],
  readonly originalImg?: Maybe<Scalars['String']>,
  readonly originalName?: Maybe<Scalars['String']>,
  readonly presentationWidth?: Maybe<Scalars['Int']>,
  readonly presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>,
  readonly src?: Maybe<StringQueryOperatorInput>,
  readonly srcSet?: Maybe<StringQueryOperatorInput>,
  readonly srcWebp?: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>,
  readonly sizes?: Maybe<StringQueryOperatorInput>,
  readonly originalImg?: Maybe<StringQueryOperatorInput>,
  readonly originalName?: Maybe<StringQueryOperatorInput>,
  readonly presentationWidth?: Maybe<IntQueryOperatorInput>,
  readonly presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  readonly __typename?: 'ImageSharpGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<ImageSharpEdge>,
  readonly nodes: ReadonlyArray<ImageSharp>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  readonly __typename?: 'ImageSharpOriginal',
  readonly width?: Maybe<Scalars['Float']>,
  readonly height?: Maybe<Scalars['Float']>,
  readonly src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  readonly width?: Maybe<FloatQueryOperatorInput>,
  readonly height?: Maybe<FloatQueryOperatorInput>,
  readonly src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  readonly __typename?: 'ImageSharpResize',
  readonly src?: Maybe<Scalars['String']>,
  readonly tracedSVG?: Maybe<Scalars['String']>,
  readonly width?: Maybe<Scalars['Int']>,
  readonly height?: Maybe<Scalars['Int']>,
  readonly aspectRatio?: Maybe<Scalars['Float']>,
  readonly originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  readonly src?: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>,
  readonly width?: Maybe<IntQueryOperatorInput>,
  readonly height?: Maybe<IntQueryOperatorInput>,
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>,
  readonly originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  readonly __typename?: 'ImageSharpResolutions',
  readonly base64?: Maybe<Scalars['String']>,
  readonly tracedSVG?: Maybe<Scalars['String']>,
  readonly aspectRatio?: Maybe<Scalars['Float']>,
  readonly width: Scalars['Float'],
  readonly height: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp?: Maybe<Scalars['String']>,
  readonly srcSetWebp?: Maybe<Scalars['String']>,
  readonly originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>,
  readonly width?: Maybe<FloatQueryOperatorInput>,
  readonly height?: Maybe<FloatQueryOperatorInput>,
  readonly src?: Maybe<StringQueryOperatorInput>,
  readonly srcSet?: Maybe<StringQueryOperatorInput>,
  readonly srcWebp?: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>,
  readonly originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  readonly __typename?: 'ImageSharpSizes',
  readonly base64?: Maybe<Scalars['String']>,
  readonly tracedSVG?: Maybe<Scalars['String']>,
  readonly aspectRatio: Scalars['Float'],
  readonly src: Scalars['String'],
  readonly srcSet: Scalars['String'],
  readonly srcWebp?: Maybe<Scalars['String']>,
  readonly srcSetWebp?: Maybe<Scalars['String']>,
  readonly sizes: Scalars['String'],
  readonly originalImg?: Maybe<Scalars['String']>,
  readonly originalName?: Maybe<Scalars['String']>,
  readonly presentationWidth?: Maybe<Scalars['Int']>,
  readonly presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>,
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>,
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>,
  readonly src?: Maybe<StringQueryOperatorInput>,
  readonly srcSet?: Maybe<StringQueryOperatorInput>,
  readonly srcWebp?: Maybe<StringQueryOperatorInput>,
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>,
  readonly sizes?: Maybe<StringQueryOperatorInput>,
  readonly originalImg?: Maybe<StringQueryOperatorInput>,
  readonly originalName?: Maybe<StringQueryOperatorInput>,
  readonly presentationWidth?: Maybe<IntQueryOperatorInput>,
  readonly presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  readonly __typename?: 'Internal',
  readonly content?: Maybe<Scalars['String']>,
  readonly contentDigest: Scalars['String'],
  readonly description?: Maybe<Scalars['String']>,
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly ignoreType?: Maybe<Scalars['Boolean']>,
  readonly mediaType?: Maybe<Scalars['String']>,
  readonly owner: Scalars['String'],
  readonly type: Scalars['String'],
  readonly counter?: Maybe<Scalars['Int']>,
};

export type InternalFilterInput = {
  readonly content?: Maybe<StringQueryOperatorInput>,
  readonly contentDigest?: Maybe<StringQueryOperatorInput>,
  readonly description?: Maybe<StringQueryOperatorInput>,
  readonly fieldOwners?: Maybe<StringQueryOperatorInput>,
  readonly ignoreType?: Maybe<BooleanQueryOperatorInput>,
  readonly mediaType?: Maybe<StringQueryOperatorInput>,
  readonly owner?: Maybe<StringQueryOperatorInput>,
  readonly type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>,
  readonly ne?: Maybe<Scalars['Int']>,
  readonly gt?: Maybe<Scalars['Int']>,
  readonly gte?: Maybe<Scalars['Int']>,
  readonly lt?: Maybe<Scalars['Int']>,
  readonly lte?: Maybe<Scalars['Int']>,
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>,
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['JSON']>,
  readonly ne?: Maybe<Scalars['JSON']>,
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>,
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>,
  readonly regex?: Maybe<Scalars['JSON']>,
  readonly glob?: Maybe<Scalars['JSON']>,
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  readonly __typename?: 'MarkdownHeading',
  readonly value?: Maybe<Scalars['String']>,
  readonly depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingFilterInput = {
  readonly value?: Maybe<StringQueryOperatorInput>,
  readonly depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  readonly elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  readonly __typename?: 'MarkdownRemark',
  readonly id: Scalars['ID'],
  readonly frontmatter: Frontmatter,
  readonly fields: MarkdownRemarkFields,
  readonly html?: Maybe<Scalars['String']>,
  readonly excerpt?: Maybe<Scalars['String']>,
  readonly rawMarkdownBody?: Maybe<Scalars['String']>,
  readonly fileAbsolutePath?: Maybe<Scalars['String']>,
  readonly htmlAst?: Maybe<Scalars['JSON']>,
  readonly excerptAst?: Maybe<Scalars['JSON']>,
  readonly headings?: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>,
  readonly timeToRead?: Maybe<Scalars['Int']>,
  readonly tableOfContents?: Maybe<Scalars['String']>,
  readonly wordCount?: Maybe<MarkdownWordCount>,
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
  readonly __typename?: 'MarkdownRemarkConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>,
  readonly nodes: ReadonlyArray<MarkdownRemark>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  readonly __typename?: 'MarkdownRemarkEdge',
  readonly next?: Maybe<MarkdownRemark>,
  readonly node: MarkdownRemark,
  readonly previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
  readonly __typename?: 'MarkdownRemarkFields',
  readonly slug: Scalars['String'],
  readonly title: Scalars['String'],
  readonly layout: Scalars['String'],
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterCategories = 'frontmatter___categories',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterFeaturedImageSrcSourceInstanceName = 'frontmatter___featuredImage___src___sourceInstanceName',
  FrontmatterFeaturedImageSrcAbsolutePath = 'frontmatter___featuredImage___src___absolutePath',
  FrontmatterFeaturedImageSrcRelativePath = 'frontmatter___featuredImage___src___relativePath',
  FrontmatterFeaturedImageSrcExtension = 'frontmatter___featuredImage___src___extension',
  FrontmatterFeaturedImageSrcSize = 'frontmatter___featuredImage___src___size',
  FrontmatterFeaturedImageSrcPrettySize = 'frontmatter___featuredImage___src___prettySize',
  FrontmatterFeaturedImageSrcModifiedTime = 'frontmatter___featuredImage___src___modifiedTime',
  FrontmatterFeaturedImageSrcAccessTime = 'frontmatter___featuredImage___src___accessTime',
  FrontmatterFeaturedImageSrcChangeTime = 'frontmatter___featuredImage___src___changeTime',
  FrontmatterFeaturedImageSrcBirthTime = 'frontmatter___featuredImage___src___birthTime',
  FrontmatterFeaturedImageSrcRoot = 'frontmatter___featuredImage___src___root',
  FrontmatterFeaturedImageSrcDir = 'frontmatter___featuredImage___src___dir',
  FrontmatterFeaturedImageSrcBase = 'frontmatter___featuredImage___src___base',
  FrontmatterFeaturedImageSrcExt = 'frontmatter___featuredImage___src___ext',
  FrontmatterFeaturedImageSrcName = 'frontmatter___featuredImage___src___name',
  FrontmatterFeaturedImageSrcRelativeDirectory = 'frontmatter___featuredImage___src___relativeDirectory',
  FrontmatterFeaturedImageSrcDev = 'frontmatter___featuredImage___src___dev',
  FrontmatterFeaturedImageSrcMode = 'frontmatter___featuredImage___src___mode',
  FrontmatterFeaturedImageSrcNlink = 'frontmatter___featuredImage___src___nlink',
  FrontmatterFeaturedImageSrcUid = 'frontmatter___featuredImage___src___uid',
  FrontmatterFeaturedImageSrcGid = 'frontmatter___featuredImage___src___gid',
  FrontmatterFeaturedImageSrcRdev = 'frontmatter___featuredImage___src___rdev',
  FrontmatterFeaturedImageSrcIno = 'frontmatter___featuredImage___src___ino',
  FrontmatterFeaturedImageSrcAtimeMs = 'frontmatter___featuredImage___src___atimeMs',
  FrontmatterFeaturedImageSrcMtimeMs = 'frontmatter___featuredImage___src___mtimeMs',
  FrontmatterFeaturedImageSrcCtimeMs = 'frontmatter___featuredImage___src___ctimeMs',
  FrontmatterFeaturedImageSrcAtime = 'frontmatter___featuredImage___src___atime',
  FrontmatterFeaturedImageSrcMtime = 'frontmatter___featuredImage___src___mtime',
  FrontmatterFeaturedImageSrcCtime = 'frontmatter___featuredImage___src___ctime',
  FrontmatterFeaturedImageSrcBirthtime = 'frontmatter___featuredImage___src___birthtime',
  FrontmatterFeaturedImageSrcBirthtimeMs = 'frontmatter___featuredImage___src___birthtimeMs',
  FrontmatterFeaturedImageSrcBlksize = 'frontmatter___featuredImage___src___blksize',
  FrontmatterFeaturedImageSrcBlocks = 'frontmatter___featuredImage___src___blocks',
  FrontmatterFeaturedImageSrcPublicUrl = 'frontmatter___featuredImage___src___publicURL',
  FrontmatterFeaturedImageSrcId = 'frontmatter___featuredImage___src___id',
  FrontmatterFeaturedImageSrcChildren = 'frontmatter___featuredImage___src___children',
  FrontmatterFeaturedImageDescription = 'frontmatter___featuredImage___description',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterDraft = 'frontmatter___draft',
  FrontmatterDropcap = 'frontmatter___dropcap',
  FieldsSlug = 'fields___slug',
  FieldsTitle = 'fields___title',
  FieldsLayout = 'fields___layout',
  Html = 'html',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  readonly slug?: Maybe<StringQueryOperatorInput>,
  readonly title?: Maybe<StringQueryOperatorInput>,
  readonly layout?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly frontmatter?: Maybe<FrontmatterFilterInput>,
  readonly fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  readonly html?: Maybe<StringQueryOperatorInput>,
  readonly excerpt?: Maybe<StringQueryOperatorInput>,
  readonly rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  readonly fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  readonly htmlAst?: Maybe<JsonQueryOperatorInput>,
  readonly excerptAst?: Maybe<JsonQueryOperatorInput>,
  readonly headings?: Maybe<MarkdownHeadingFilterListInput>,
  readonly timeToRead?: Maybe<IntQueryOperatorInput>,
  readonly tableOfContents?: Maybe<StringQueryOperatorInput>,
  readonly wordCount?: Maybe<MarkdownWordCountFilterInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkGroupConnection = {
  readonly __typename?: 'MarkdownRemarkGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>,
  readonly nodes: ReadonlyArray<MarkdownRemark>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  readonly __typename?: 'MarkdownWordCount',
  readonly paragraphs?: Maybe<Scalars['Int']>,
  readonly sentences?: Maybe<Scalars['Int']>,
  readonly words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  readonly paragraphs?: Maybe<IntQueryOperatorInput>,
  readonly sentences?: Maybe<IntQueryOperatorInput>,
  readonly words?: Maybe<IntQueryOperatorInput>,
};

export type Node = {
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};

export type NodeFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  readonly elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  readonly __typename?: 'PageInfo',
  readonly currentPage: Scalars['Int'],
  readonly hasPreviousPage: Scalars['Boolean'],
  readonly hasNextPage: Scalars['Boolean'],
  readonly itemCount: Scalars['Int'],
  readonly pageCount: Scalars['Int'],
  readonly perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  readonly turnPolicy?: Maybe<PotraceTurnPolicy>,
  readonly turdSize?: Maybe<Scalars['Float']>,
  readonly alphaMax?: Maybe<Scalars['Float']>,
  readonly optCurve?: Maybe<Scalars['Boolean']>,
  readonly optTolerance?: Maybe<Scalars['Float']>,
  readonly threshold?: Maybe<Scalars['Int']>,
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>,
  readonly color?: Maybe<Scalars['String']>,
  readonly background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  readonly __typename?: 'Query',
  readonly file?: Maybe<File>,
  readonly allFile: FileConnection,
  readonly directory?: Maybe<Directory>,
  readonly allDirectory: DirectoryConnection,
  readonly sitePage?: Maybe<SitePage>,
  readonly allSitePage: SitePageConnection,
  readonly markdownRemark?: Maybe<MarkdownRemark>,
  readonly allMarkdownRemark: MarkdownRemarkConnection,
  readonly imageSharp?: Maybe<ImageSharp>,
  readonly allImageSharp: ImageSharpConnection,
  readonly site?: Maybe<Site>,
  readonly allSite: SiteConnection,
  readonly sitePlugin?: Maybe<SitePlugin>,
  readonly allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<FrontmatterFilterInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  siteMetadata?: Maybe<SiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  readonly __typename?: 'Site',
  readonly siteMetadata: SiteMetadata,
  readonly port?: Maybe<Scalars['Int']>,
  readonly host?: Maybe<Scalars['String']>,
  readonly polyfill?: Maybe<Scalars['Boolean']>,
  readonly pathPrefix?: Maybe<Scalars['String']>,
  readonly buildTime?: Maybe<Scalars['Date']>,
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  readonly __typename?: 'SiteConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SiteEdge>,
  readonly nodes: ReadonlyArray<Site>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  readonly __typename?: 'SiteEdge',
  readonly next?: Maybe<Site>,
  readonly node: Site,
  readonly previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataKeywords = 'siteMetadata___keywords',
  SiteMetadataAuthorName = 'siteMetadata___author___name',
  SiteMetadataAuthorUrl = 'siteMetadata___author___url',
  SiteMetadataSocialGithub = 'siteMetadata___social___github',
  SiteMetadataSocialInstagram = 'siteMetadata___social___instagram',
  SiteMetadataSocialLinkedin = 'siteMetadata___social___linkedin',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  readonly siteMetadata?: Maybe<SiteMetadataFilterInput>,
  readonly port?: Maybe<IntQueryOperatorInput>,
  readonly host?: Maybe<StringQueryOperatorInput>,
  readonly polyfill?: Maybe<BooleanQueryOperatorInput>,
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>,
  readonly buildTime?: Maybe<DateQueryOperatorInput>,
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
};

export type SiteGroupConnection = {
  readonly __typename?: 'SiteGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SiteEdge>,
  readonly nodes: ReadonlyArray<Site>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type SiteMetadata = {
  readonly __typename?: 'SiteMetadata',
  readonly title: Scalars['String'],
  readonly siteUrl: Scalars['String'],
  readonly description: Scalars['String'],
  readonly keywords: Scalars['String'],
  readonly author: Author,
  readonly social: Social,
};

export type SiteMetadataFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>,
  readonly siteUrl?: Maybe<StringQueryOperatorInput>,
  readonly description?: Maybe<StringQueryOperatorInput>,
  readonly keywords?: Maybe<StringQueryOperatorInput>,
  readonly author?: Maybe<AuthorFilterInput>,
  readonly social?: Maybe<SocialFilterInput>,
};

export type SitePage = Node & {
  readonly __typename?: 'SitePage',
  readonly path: Scalars['String'],
  readonly component: Scalars['String'],
  readonly internalComponentName: Scalars['String'],
  readonly componentChunkName: Scalars['String'],
  readonly matchPath?: Maybe<Scalars['String']>,
  readonly context: SitePageContext,
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  readonly pluginCreator?: Maybe<SitePlugin>,
  readonly pluginCreatorId?: Maybe<Scalars['String']>,
  readonly componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  readonly __typename?: 'SitePageConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePageEdge>,
  readonly nodes: ReadonlyArray<SitePage>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  readonly __typename?: 'SitePageContext',
  readonly slug?: Maybe<Scalars['String']>,
  readonly previous?: Maybe<MarkdownRemark>,
  readonly next?: Maybe<MarkdownRemark>,
  readonly category?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
};

export type SitePageContextFilterInput = {
  readonly slug?: Maybe<StringQueryOperatorInput>,
  readonly previous?: Maybe<MarkdownRemarkFilterInput>,
  readonly next?: Maybe<MarkdownRemarkFilterInput>,
};

export type SitePageEdge = {
  readonly __typename?: 'SitePageEdge',
  readonly next?: Maybe<SitePage>,
  readonly node: SitePage,
  readonly previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  ContextSlug = 'context___slug',
  ContextPreviousId = 'context___previous___id',
  ContextPreviousFrontmatterTitle = 'context___previous___frontmatter___title',
  ContextPreviousFrontmatterCategories = 'context___previous___frontmatter___categories',
  ContextPreviousFrontmatterTags = 'context___previous___frontmatter___tags',
  ContextPreviousFrontmatterDate = 'context___previous___frontmatter___date',
  ContextPreviousFrontmatterDescription = 'context___previous___frontmatter___description',
  ContextPreviousFrontmatterDraft = 'context___previous___frontmatter___draft',
  ContextPreviousFrontmatterDropcap = 'context___previous___frontmatter___dropcap',
  ContextPreviousFieldsSlug = 'context___previous___fields___slug',
  ContextPreviousFieldsTitle = 'context___previous___fields___title',
  ContextPreviousFieldsLayout = 'context___previous___fields___layout',
  ContextPreviousHtml = 'context___previous___html',
  ContextPreviousExcerpt = 'context___previous___excerpt',
  ContextPreviousRawMarkdownBody = 'context___previous___rawMarkdownBody',
  ContextPreviousFileAbsolutePath = 'context___previous___fileAbsolutePath',
  ContextPreviousHtmlAst = 'context___previous___htmlAst',
  ContextPreviousExcerptAst = 'context___previous___excerptAst',
  ContextPreviousHeadings = 'context___previous___headings',
  ContextPreviousHeadingsValue = 'context___previous___headings___value',
  ContextPreviousHeadingsDepth = 'context___previous___headings___depth',
  ContextPreviousTimeToRead = 'context___previous___timeToRead',
  ContextPreviousTableOfContents = 'context___previous___tableOfContents',
  ContextPreviousWordCountParagraphs = 'context___previous___wordCount___paragraphs',
  ContextPreviousWordCountSentences = 'context___previous___wordCount___sentences',
  ContextPreviousWordCountWords = 'context___previous___wordCount___words',
  ContextPreviousParentId = 'context___previous___parent___id',
  ContextPreviousParentChildren = 'context___previous___parent___children',
  ContextPreviousChildren = 'context___previous___children',
  ContextPreviousChildrenId = 'context___previous___children___id',
  ContextPreviousChildrenChildren = 'context___previous___children___children',
  ContextPreviousInternalContent = 'context___previous___internal___content',
  ContextPreviousInternalContentDigest = 'context___previous___internal___contentDigest',
  ContextPreviousInternalDescription = 'context___previous___internal___description',
  ContextPreviousInternalFieldOwners = 'context___previous___internal___fieldOwners',
  ContextPreviousInternalIgnoreType = 'context___previous___internal___ignoreType',
  ContextPreviousInternalMediaType = 'context___previous___internal___mediaType',
  ContextPreviousInternalOwner = 'context___previous___internal___owner',
  ContextPreviousInternalType = 'context___previous___internal___type',
  ContextNextId = 'context___next___id',
  ContextNextFrontmatterTitle = 'context___next___frontmatter___title',
  ContextNextFrontmatterCategories = 'context___next___frontmatter___categories',
  ContextNextFrontmatterTags = 'context___next___frontmatter___tags',
  ContextNextFrontmatterDate = 'context___next___frontmatter___date',
  ContextNextFrontmatterDescription = 'context___next___frontmatter___description',
  ContextNextFrontmatterDraft = 'context___next___frontmatter___draft',
  ContextNextFrontmatterDropcap = 'context___next___frontmatter___dropcap',
  ContextNextFieldsSlug = 'context___next___fields___slug',
  ContextNextFieldsTitle = 'context___next___fields___title',
  ContextNextFieldsLayout = 'context___next___fields___layout',
  ContextNextHtml = 'context___next___html',
  ContextNextExcerpt = 'context___next___excerpt',
  ContextNextRawMarkdownBody = 'context___next___rawMarkdownBody',
  ContextNextFileAbsolutePath = 'context___next___fileAbsolutePath',
  ContextNextHtmlAst = 'context___next___htmlAst',
  ContextNextExcerptAst = 'context___next___excerptAst',
  ContextNextHeadings = 'context___next___headings',
  ContextNextHeadingsValue = 'context___next___headings___value',
  ContextNextHeadingsDepth = 'context___next___headings___depth',
  ContextNextTimeToRead = 'context___next___timeToRead',
  ContextNextTableOfContents = 'context___next___tableOfContents',
  ContextNextWordCountParagraphs = 'context___next___wordCount___paragraphs',
  ContextNextWordCountSentences = 'context___next___wordCount___sentences',
  ContextNextWordCountWords = 'context___next___wordCount___words',
  ContextNextParentId = 'context___next___parent___id',
  ContextNextParentChildren = 'context___next___parent___children',
  ContextNextChildren = 'context___next___children',
  ContextNextChildrenId = 'context___next___children___id',
  ContextNextChildrenChildren = 'context___next___children___children',
  ContextNextInternalContent = 'context___next___internal___content',
  ContextNextInternalContentDigest = 'context___next___internal___contentDigest',
  ContextNextInternalDescription = 'context___next___internal___description',
  ContextNextInternalFieldOwners = 'context___next___internal___fieldOwners',
  ContextNextInternalIgnoreType = 'context___next___internal___ignoreType',
  ContextNextInternalMediaType = 'context___next___internal___mediaType',
  ContextNextInternalOwner = 'context___next___internal___owner',
  ContextNextInternalType = 'context___next___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsTarget = 'pluginCreator___pluginOptions___target',
  PluginCreatorPluginOptionsRel = 'pluginCreator___pluginOptions___rel',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsAliasesCs = 'pluginCreator___pluginOptions___aliases___cs',
  PluginCreatorPluginOptionsAliasesPosh = 'pluginCreator___pluginOptions___aliases___posh',
  PluginCreatorPluginOptionsIgnoreFileExtensions = 'pluginCreator___pluginOptions___ignoreFileExtensions',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsPathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsWorkboxConfigRuntimeCaching = 'pluginCreator___pluginOptions___workboxConfig___runtimeCaching',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
  PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
  PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
  PluginCreatorPluginOptionsFeedsTitle = 'pluginCreator___pluginOptions___feeds___title',
  PluginCreatorPluginOptionsShortname = 'pluginCreator___pluginOptions___shortname',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  readonly path?: Maybe<StringQueryOperatorInput>,
  readonly component?: Maybe<StringQueryOperatorInput>,
  readonly internalComponentName?: Maybe<StringQueryOperatorInput>,
  readonly componentChunkName?: Maybe<StringQueryOperatorInput>,
  readonly matchPath?: Maybe<StringQueryOperatorInput>,
  readonly context?: Maybe<SitePageContextFilterInput>,
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
  readonly isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  readonly pluginCreator?: Maybe<SitePluginFilterInput>,
  readonly pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  readonly componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  readonly __typename?: 'SitePageGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePageEdge>,
  readonly nodes: ReadonlyArray<SitePage>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  readonly __typename?: 'SitePlugin',
  readonly id: Scalars['ID'],
  readonly parent?: Maybe<Node>,
  readonly children: ReadonlyArray<Node>,
  readonly internal: Internal,
  readonly resolve?: Maybe<Scalars['String']>,
  readonly name?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
  readonly pluginOptions?: Maybe<SitePluginPluginOptions>,
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly pluginFilepath?: Maybe<Scalars['String']>,
  readonly packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  readonly __typename?: 'SitePluginConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePluginEdge>,
  readonly nodes: ReadonlyArray<SitePlugin>,
  readonly pageInfo: PageInfo,
  readonly distinct: ReadonlyArray<Scalars['String']>,
  readonly group: ReadonlyArray<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  readonly __typename?: 'SitePluginEdge',
  readonly next?: Maybe<SitePlugin>,
  readonly node: SitePlugin,
  readonly previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsName = 'pluginOptions___plugins___pluginOptions___name',
  PluginOptionsPluginsPluginOptionsTarget = 'pluginOptions___plugins___pluginOptions___target',
  PluginOptionsPluginsPluginOptionsRel = 'pluginOptions___plugins___pluginOptions___rel',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsPluginOptionsIgnoreFileExtensions = 'pluginOptions___plugins___pluginOptions___ignoreFileExtensions',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsPathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsTarget = 'pluginOptions___target',
  PluginOptionsRel = 'pluginOptions___rel',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsAliasesCs = 'pluginOptions___aliases___cs',
  PluginOptionsAliasesPosh = 'pluginOptions___aliases___posh',
  PluginOptionsIgnoreFileExtensions = 'pluginOptions___ignoreFileExtensions',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsWorkboxConfigRuntimeCaching = 'pluginOptions___workboxConfig___runtimeCaching',
  PluginOptionsWorkboxConfigRuntimeCachingHandler = 'pluginOptions___workboxConfig___runtimeCaching___handler',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
  PluginOptionsShortname = 'pluginOptions___shortname',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly parent?: Maybe<NodeFilterInput>,
  readonly children?: Maybe<NodeFilterListInput>,
  readonly internal?: Maybe<InternalFilterInput>,
  readonly resolve?: Maybe<StringQueryOperatorInput>,
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly version?: Maybe<StringQueryOperatorInput>,
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>,
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>,
  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>,
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>,
  readonly packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  readonly __typename?: 'SitePluginGroupConnection',
  readonly totalCount: Scalars['Int'],
  readonly edges: ReadonlyArray<SitePluginEdge>,
  readonly nodes: ReadonlyArray<SitePlugin>,
  readonly pageInfo: PageInfo,
  readonly field: Scalars['String'],
  readonly fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  readonly __typename?: 'SitePluginPackageJson',
  readonly name?: Maybe<Scalars['String']>,
  readonly description?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
  readonly main?: Maybe<Scalars['String']>,
  readonly license?: Maybe<Scalars['String']>,
  readonly dependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>,
  readonly devDependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>,
  readonly peerDependencies?: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDependencies',
  readonly name?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  readonly __typename?: 'SitePluginPackageJsonDevDependencies',
  readonly name?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly description?: Maybe<StringQueryOperatorInput>,
  readonly version?: Maybe<StringQueryOperatorInput>,
  readonly main?: Maybe<StringQueryOperatorInput>,
  readonly license?: Maybe<StringQueryOperatorInput>,
  readonly dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  readonly devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  readonly peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  readonly keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  readonly __typename?: 'SitePluginPackageJsonPeerDependencies',
  readonly name?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  readonly __typename?: 'SitePluginPluginOptions',
  readonly plugins?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>,
  readonly name?: Maybe<Scalars['String']>,
  readonly target?: Maybe<Scalars['String']>,
  readonly rel?: Maybe<Scalars['String']>,
  readonly wrapperStyle?: Maybe<Scalars['String']>,
  readonly aliases?: Maybe<SitePluginPluginOptionsAliases>,
  readonly ignoreFileExtensions?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly maxWidth?: Maybe<Scalars['Int']>,
  readonly linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  readonly withWebp?: Maybe<Scalars['Boolean']>,
  readonly pathPrefix?: Maybe<Scalars['String']>,
  readonly backgroundColor?: Maybe<Scalars['String']>,
  readonly showCaptions?: Maybe<Scalars['Boolean']>,
  readonly markdownCaptions?: Maybe<Scalars['Boolean']>,
  readonly tracedSVG?: Maybe<Scalars['Boolean']>,
  readonly loading?: Maybe<Scalars['String']>,
  readonly disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  readonly disableBgImage?: Maybe<Scalars['Boolean']>,
  readonly siteUrl?: Maybe<Scalars['String']>,
  readonly path?: Maybe<Scalars['String']>,
  readonly short_name?: Maybe<Scalars['String']>,
  readonly start_url?: Maybe<Scalars['String']>,
  readonly background_color?: Maybe<Scalars['String']>,
  readonly theme_color?: Maybe<Scalars['String']>,
  readonly display?: Maybe<Scalars['String']>,
  readonly icon?: Maybe<Scalars['String']>,
  readonly workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfig>,
  readonly query?: Maybe<Scalars['String']>,
  readonly feeds?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>,
  readonly shortname?: Maybe<Scalars['String']>,
  readonly pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsAliases = {
  readonly __typename?: 'SitePluginPluginOptionsAliases',
  readonly cs?: Maybe<Scalars['String']>,
  readonly posh?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsAliasesFilterInput = {
  readonly cs?: Maybe<StringQueryOperatorInput>,
  readonly posh?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFeeds = {
  readonly __typename?: 'SitePluginPluginOptionsFeeds',
  readonly query?: Maybe<Scalars['String']>,
  readonly output?: Maybe<Scalars['String']>,
  readonly title?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query?: Maybe<StringQueryOperatorInput>,
  readonly output?: Maybe<StringQueryOperatorInput>,
  readonly title?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  readonly plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly target?: Maybe<StringQueryOperatorInput>,
  readonly rel?: Maybe<StringQueryOperatorInput>,
  readonly wrapperStyle?: Maybe<StringQueryOperatorInput>,
  readonly aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>,
  readonly ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
  readonly maxWidth?: Maybe<IntQueryOperatorInput>,
  readonly linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  readonly withWebp?: Maybe<BooleanQueryOperatorInput>,
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>,
  readonly backgroundColor?: Maybe<StringQueryOperatorInput>,
  readonly showCaptions?: Maybe<BooleanQueryOperatorInput>,
  readonly markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  readonly tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  readonly loading?: Maybe<StringQueryOperatorInput>,
  readonly disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  readonly disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  readonly siteUrl?: Maybe<StringQueryOperatorInput>,
  readonly path?: Maybe<StringQueryOperatorInput>,
  readonly short_name?: Maybe<StringQueryOperatorInput>,
  readonly start_url?: Maybe<StringQueryOperatorInput>,
  readonly background_color?: Maybe<StringQueryOperatorInput>,
  readonly theme_color?: Maybe<StringQueryOperatorInput>,
  readonly display?: Maybe<StringQueryOperatorInput>,
  readonly icon?: Maybe<StringQueryOperatorInput>,
  readonly workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>,
  readonly query?: Maybe<StringQueryOperatorInput>,
  readonly feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>,
  readonly shortname?: Maybe<StringQueryOperatorInput>,
  readonly pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  readonly __typename?: 'SitePluginPluginOptionsPlugins',
  readonly resolve?: Maybe<Scalars['String']>,
  readonly id?: Maybe<Scalars['String']>,
  readonly name?: Maybe<Scalars['String']>,
  readonly version?: Maybe<Scalars['String']>,
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve?: Maybe<StringQueryOperatorInput>,
  readonly id?: Maybe<StringQueryOperatorInput>,
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly version?: Maybe<StringQueryOperatorInput>,
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>,
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>,
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly __typename?: 'SitePluginPluginOptionsPluginsPluginOptions',
  readonly name?: Maybe<Scalars['String']>,
  readonly target?: Maybe<Scalars['String']>,
  readonly rel?: Maybe<Scalars['String']>,
  readonly wrapperStyle?: Maybe<Scalars['String']>,
  readonly aliases?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliases>,
  readonly ignoreFileExtensions?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly maxWidth?: Maybe<Scalars['Int']>,
  readonly linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  readonly withWebp?: Maybe<Scalars['Boolean']>,
  readonly pathPrefix?: Maybe<Scalars['String']>,
  readonly backgroundColor?: Maybe<Scalars['String']>,
  readonly showCaptions?: Maybe<Scalars['Boolean']>,
  readonly markdownCaptions?: Maybe<Scalars['Boolean']>,
  readonly tracedSVG?: Maybe<Scalars['Boolean']>,
  readonly loading?: Maybe<Scalars['String']>,
  readonly disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  readonly disableBgImage?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsAliases = {
  readonly __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsAliases',
  readonly cs?: Maybe<Scalars['String']>,
  readonly posh?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput = {
  readonly cs?: Maybe<StringQueryOperatorInput>,
  readonly posh?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>,
  readonly target?: Maybe<StringQueryOperatorInput>,
  readonly rel?: Maybe<StringQueryOperatorInput>,
  readonly wrapperStyle?: Maybe<StringQueryOperatorInput>,
  readonly aliases?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput>,
  readonly ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
  readonly maxWidth?: Maybe<IntQueryOperatorInput>,
  readonly linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  readonly withWebp?: Maybe<BooleanQueryOperatorInput>,
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>,
  readonly backgroundColor?: Maybe<StringQueryOperatorInput>,
  readonly showCaptions?: Maybe<BooleanQueryOperatorInput>,
  readonly markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  readonly tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  readonly loading?: Maybe<StringQueryOperatorInput>,
  readonly disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  readonly disableBgImage?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsWorkboxConfig = {
  readonly __typename?: 'SitePluginPluginOptionsWorkboxConfig',
  readonly runtimeCaching?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsWorkboxConfigRuntimeCaching>>>,
};

export type SitePluginPluginOptionsWorkboxConfigFilterInput = {
  readonly runtimeCaching?: Maybe<SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterListInput>,
};

export type SitePluginPluginOptionsWorkboxConfigRuntimeCaching = {
  readonly __typename?: 'SitePluginPluginOptionsWorkboxConfigRuntimeCaching',
  readonly handler?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterInput = {
  readonly handler?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterInput>,
};

export type SitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type SiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>,
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>,
};

export type Social = {
  readonly __typename?: 'Social',
  readonly github?: Maybe<Scalars['String']>,
  readonly instagram?: Maybe<Scalars['String']>,
  readonly linkedin?: Maybe<Scalars['String']>,
};

export type SocialFilterInput = {
  readonly github?: Maybe<StringQueryOperatorInput>,
  readonly instagram?: Maybe<StringQueryOperatorInput>,
  readonly linkedin?: Maybe<StringQueryOperatorInput>,
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>,
  readonly ne?: Maybe<Scalars['String']>,
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>,
  readonly regex?: Maybe<Scalars['String']>,
  readonly glob?: Maybe<Scalars['String']>,
};

export type GatsbyImageSharpFixedFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { readonly __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { readonly __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { readonly __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { readonly __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { readonly __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { readonly __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type PagesQueryQueryVariables = {};


export type PagesQueryQuery = (
  { readonly __typename?: 'Query' }
  & { readonly allSitePage: (
    { readonly __typename?: 'SitePageConnection' }
    & { readonly nodes: ReadonlyArray<(
      { readonly __typename?: 'SitePage' }
      & Pick<SitePage, 'path'>
    )> }
  ) }
);

export type BlogListerQueryVariables = {};


export type BlogListerQuery = (
  { readonly __typename?: 'Query' }
  & { readonly allMarkdownRemark: (
    { readonly __typename?: 'MarkdownRemarkConnection' }
    & { readonly edges: ReadonlyArray<(
      { readonly __typename?: 'MarkdownRemarkEdge' }
      & { readonly node: (
        { readonly __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { readonly fields: (
          { readonly __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        ), readonly frontmatter: (
          { readonly __typename?: 'Frontmatter' }
          & Pick<Frontmatter, 'title' | 'draft' | 'date' | 'categories' | 'description'>
          & { readonly featuredImage: Maybe<(
            { readonly __typename?: 'FeaturedImage' }
            & Pick<FeaturedImage, 'description'>
            & { readonly src: (
              { readonly __typename?: 'File' }
              & { readonly childImageSharp: Maybe<(
                { readonly __typename?: 'ImageSharp' }
                & { readonly fluid: Maybe<(
                  { readonly __typename?: 'ImageSharpFluid' }
                  & GatsbyImageSharpFluid_WithWebpFragment
                )> }
              )> }
            ) }
          )> }
        ) }
      ) }
    )> }
  ) }
);

export type FooterQueryVariables = {};


export type FooterQuery = (
  { readonly __typename?: 'Query' }
  & { readonly site: Maybe<(
    { readonly __typename?: 'Site' }
    & { readonly siteMetadata: (
      { readonly __typename?: 'SiteMetadata' }
      & { readonly social: (
        { readonly __typename?: 'Social' }
        & Pick<Social, 'github' | 'instagram' | 'linkedin'>
      ) }
    ) }
  )> }
);

export type NavigationQueryVariables = {};


export type NavigationQuery = (
  { readonly __typename?: 'Query' }
  & { readonly site: Maybe<(
    { readonly __typename?: 'Site' }
    & { readonly siteMetadata: (
      { readonly __typename?: 'SiteMetadata' }
      & Pick<SiteMetadata, 'title' | 'description'>
    ) }
  )> }
);

export type ArticlesQueryVariables = {};


export type ArticlesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly allMarkdownRemark: (
    { readonly __typename?: 'MarkdownRemarkConnection' }
    & { readonly edges: ReadonlyArray<(
      { readonly __typename?: 'MarkdownRemarkEdge' }
      & { readonly node: (
        { readonly __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'id'>
        & { readonly fields: (
          { readonly __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'layout' | 'slug'>
        ) }
      ) }
    )> }
  ) }
);

export type PagesQueryVariables = {};


export type PagesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly allMarkdownRemark: (
    { readonly __typename?: 'MarkdownRemarkConnection' }
    & { readonly edges: ReadonlyArray<(
      { readonly __typename?: 'MarkdownRemarkEdge' }
      & { readonly node: (
        { readonly __typename?: 'MarkdownRemark' }
        & { readonly fields: (
          { readonly __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'layout' | 'slug'>
        ) }
      ) }
    )> }
  ) }
);

export type IndexLayoutQueryVariables = {};


export type IndexLayoutQuery = (
  { readonly __typename?: 'Query' }
  & { readonly site: Maybe<(
    { readonly __typename?: 'Site' }
    & { readonly siteMetadata: (
      { readonly __typename?: 'SiteMetadata' }
      & Pick<SiteMetadata, 'title' | 'description' | 'keywords' | 'siteUrl'>
    ) }
  )>, readonly file: Maybe<(
    { readonly __typename?: 'File' }
    & { readonly childImageSharp: Maybe<(
      { readonly __typename?: 'ImageSharp' }
      & { readonly fixed: Maybe<(
        { readonly __typename?: 'ImageSharpFixed' }
        & GatsbyImageSharpFixed_WithWebpFragment
      )> }
    )> }
  )> }
);

export type PostListerTemplateQueryVariables = {
  slug: Scalars['String']
};


export type PostListerTemplateQuery = (
  { readonly __typename?: 'Query' }
  & { readonly sitePage: Maybe<(
    { readonly __typename?: 'SitePage' }
    & { readonly context: (
      { readonly __typename?: 'SitePageContext' }
      & Pick<SitePageContext, 'category'>
    ) }
  )> }
);

export type PageTemplateQueryVariables = {
  slug: Scalars['String']
};


export type PageTemplateQuery = (
  { readonly __typename?: 'Query' }
  & { readonly site: Maybe<(
    { readonly __typename?: 'Site' }
    & { readonly siteMetadata: (
      { readonly __typename?: 'SiteMetadata' }
      & Pick<SiteMetadata, 'siteUrl'>
    ) }
  )>, readonly markdownRemark: Maybe<(
    { readonly __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html' | 'excerpt'>
    & { readonly frontmatter: (
      { readonly __typename?: 'Frontmatter' }
      & Pick<Frontmatter, 'title' | 'date'>
      & { readonly featuredImage: Maybe<(
        { readonly __typename?: 'FeaturedImage' }
        & Pick<FeaturedImage, 'description'>
        & { readonly src: (
          { readonly __typename?: 'File' }
          & { readonly childImageSharp: Maybe<(
            { readonly __typename?: 'ImageSharp' }
            & { readonly fluid: Maybe<(
              { readonly __typename?: 'ImageSharpFluid' }
              & GatsbyImageSharpFluid_WithWebpFragment
            )> }
          )> }
        ) }
      )> }
    ) }
  )>, readonly sitePage: Maybe<(
    { readonly __typename?: 'SitePage' }
    & Pick<SitePage, 'path'>
    & { readonly context: (
      { readonly __typename?: 'SitePageContext' }
      & { readonly previous: Maybe<(
        { readonly __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { readonly fields: (
          { readonly __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        ), readonly frontmatter: (
          { readonly __typename?: 'Frontmatter' }
          & Pick<Frontmatter, 'title' | 'date' | 'categories' | 'description'>
          & { readonly featuredImage: Maybe<(
            { readonly __typename?: 'FeaturedImage' }
            & Pick<FeaturedImage, 'description'>
            & { readonly src: (
              { readonly __typename?: 'File' }
              & { readonly childImageSharp: Maybe<(
                { readonly __typename?: 'ImageSharp' }
                & { readonly fluid: Maybe<(
                  { readonly __typename?: 'ImageSharpFluid' }
                  & GatsbyImageSharpFluid_WithWebpFragment
                )> }
              )> }
            ) }
          )> }
        ) }
      )> }
    ) }
  )> }
);
