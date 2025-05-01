
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model Major
 * 
 */
export type Major = $Result.DefaultSelection<Prisma.$MajorPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CoursePrerequisite
 * 
 */
export type CoursePrerequisite = $Result.DefaultSelection<Prisma.$CoursePrerequisitePayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Roles: {
  Admin: 'Admin',
  Student: 'Student',
  Instructor: 'Instructor'
};

export type Roles = (typeof Roles)[keyof typeof Roles]


export const SectionStatus: {
  COMPLETED: 'COMPLETED',
  ONGOING: 'ONGOING',
  OPEN_REGISTRATION: 'OPEN_REGISTRATION'
};

export type SectionStatus = (typeof SectionStatus)[keyof typeof SectionStatus]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  CANCELLED: 'CANCELLED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]

}

export type Roles = $Enums.Roles

export const Roles: typeof $Enums.Roles

export type SectionStatus = $Enums.SectionStatus

export const SectionStatus: typeof $Enums.SectionStatus

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.major`: Exposes CRUD operations for the **Major** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.major.findMany()
    * ```
    */
  get major(): Prisma.MajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursePrerequisite`: Exposes CRUD operations for the **CoursePrerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursePrerequisites
    * const coursePrerequisites = await prisma.coursePrerequisite.findMany()
    * ```
    */
  get coursePrerequisite(): Prisma.CoursePrerequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Student: 'Student',
    Instructor: 'Instructor',
    Major: 'Major',
    Course: 'Course',
    CoursePrerequisite: 'CoursePrerequisite',
    Section: 'Section',
    Registration: 'Registration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "student" | "instructor" | "major" | "course" | "coursePrerequisite" | "section" | "registration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      Major: {
        payload: Prisma.$MajorPayload<ExtArgs>
        fields: Prisma.MajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findFirst: {
            args: Prisma.MajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findMany: {
            args: Prisma.MajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          create: {
            args: Prisma.MajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          createMany: {
            args: Prisma.MajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          delete: {
            args: Prisma.MajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          update: {
            args: Prisma.MajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          deleteMany: {
            args: Prisma.MajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          upsert: {
            args: Prisma.MajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          aggregate: {
            args: Prisma.MajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajor>
          }
          groupBy: {
            args: Prisma.MajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CoursePrerequisite: {
        payload: Prisma.$CoursePrerequisitePayload<ExtArgs>
        fields: Prisma.CoursePrerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursePrerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursePrerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>
          }
          findFirst: {
            args: Prisma.CoursePrerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursePrerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>
          }
          findMany: {
            args: Prisma.CoursePrerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>[]
          }
          create: {
            args: Prisma.CoursePrerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>
          }
          createMany: {
            args: Prisma.CoursePrerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursePrerequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>[]
          }
          delete: {
            args: Prisma.CoursePrerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>
          }
          update: {
            args: Prisma.CoursePrerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>
          }
          deleteMany: {
            args: Prisma.CoursePrerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursePrerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursePrerequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>[]
          }
          upsert: {
            args: Prisma.CoursePrerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePrerequisitePayload>
          }
          aggregate: {
            args: Prisma.CoursePrerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursePrerequisite>
          }
          groupBy: {
            args: Prisma.CoursePrerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursePrerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursePrerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<CoursePrerequisiteCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    student?: StudentOmit
    instructor?: InstructorOmit
    major?: MajorOmit
    course?: CourseOmit
    coursePrerequisite?: CoursePrerequisiteOmit
    section?: SectionOmit
    registration?: RegistrationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    registrations: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | StudentCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }


  /**
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    sections: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | InstructorCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Count Type MajorCountOutputType
   */

  export type MajorCountOutputType = {
    students: number
    instructors: number
    courses: number
  }

  export type MajorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | MajorCountOutputTypeCountStudentsArgs
    instructors?: boolean | MajorCountOutputTypeCountInstructorsArgs
    courses?: boolean | MajorCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCountOutputType
     */
    select?: MajorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    sections: number
    registrations: number
    prerequisites: number
    prerequisiteFor: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | CourseCountOutputTypeCountSectionsArgs
    registrations?: boolean | CourseCountOutputTypeCountRegistrationsArgs
    prerequisites?: boolean | CourseCountOutputTypeCountPrerequisitesArgs
    prerequisiteFor?: boolean | CourseCountOutputTypeCountPrerequisiteForArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisiteForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePrerequisiteWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    registrations: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | SectionCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    role: $Enums.Roles | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    role: $Enums.Roles | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    firstName: string
    lastName: string
    username: string
    password: string
    role: $Enums.Roles
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    Admin?: boolean | User$AdminArgs<ExtArgs>
    Student?: boolean | User$StudentArgs<ExtArgs>
    Instructor?: boolean | User$InstructorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "firstName" | "lastName" | "username" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | User$AdminArgs<ExtArgs>
    Student?: boolean | User$StudentArgs<ExtArgs>
    Instructor?: boolean | User$InstructorArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      Student: Prisma.$StudentPayload<ExtArgs> | null
      Instructor: Prisma.$InstructorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string
      lastName: string
      username: string
      password: string
      role: $Enums.Roles
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Student<T extends User$StudentArgs<ExtArgs> = {}>(args?: Subset<T, User$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Instructor<T extends User$InstructorArgs<ExtArgs> = {}>(args?: Subset<T, User$InstructorArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Roles'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.Student
   */
  export type User$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.Instructor
   */
  export type User$InstructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const adminWithUserIdOnly = await prisma.admin.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `userId`
     * const adminWithUserIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `userId`
     * const adminWithUserIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    gpa: number | null
    finishedCreditHour: number | null
  }

  export type StudentSumAggregateOutputType = {
    gpa: number | null
    finishedCreditHour: number | null
  }

  export type StudentMinAggregateOutputType = {
    userId: string | null
    gpa: number | null
    finishedCreditHour: number | null
    majorId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    userId: string | null
    gpa: number | null
    finishedCreditHour: number | null
    majorId: string | null
  }

  export type StudentCountAggregateOutputType = {
    userId: number
    gpa: number
    finishedCreditHour: number
    majorId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    gpa?: true
    finishedCreditHour?: true
  }

  export type StudentSumAggregateInputType = {
    gpa?: true
    finishedCreditHour?: true
  }

  export type StudentMinAggregateInputType = {
    userId?: true
    gpa?: true
    finishedCreditHour?: true
    majorId?: true
  }

  export type StudentMaxAggregateInputType = {
    userId?: true
    gpa?: true
    finishedCreditHour?: true
    majorId?: true
  }

  export type StudentCountAggregateInputType = {
    userId?: true
    gpa?: true
    finishedCreditHour?: true
    majorId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    userId: string
    gpa: number
    finishedCreditHour: number
    majorId: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gpa?: boolean
    finishedCreditHour?: boolean
    majorId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Student$registrationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gpa?: boolean
    finishedCreditHour?: boolean
    majorId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gpa?: boolean
    finishedCreditHour?: boolean
    majorId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    userId?: boolean
    gpa?: boolean
    finishedCreditHour?: boolean
    majorId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "gpa" | "finishedCreditHour" | "majorId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Student$registrationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      major: Prisma.$MajorPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      gpa: number
      finishedCreditHour: number
      majorId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const studentWithUserIdOnly = await prisma.student.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `userId`
     * const studentWithUserIdOnly = await prisma.student.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `userId`
     * const studentWithUserIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Student$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly userId: FieldRef<"Student", 'String'>
    readonly gpa: FieldRef<"Student", 'Float'>
    readonly finishedCreditHour: FieldRef<"Student", 'Int'>
    readonly majorId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.registrations
   */
  export type Student$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorMinAggregateOutputType = {
    userId: string | null
    majorId: string | null
  }

  export type InstructorMaxAggregateOutputType = {
    userId: string | null
    majorId: string | null
  }

  export type InstructorCountAggregateOutputType = {
    userId: number
    majorId: number
    _all: number
  }


  export type InstructorMinAggregateInputType = {
    userId?: true
    majorId?: true
  }

  export type InstructorMaxAggregateInputType = {
    userId?: true
    majorId?: true
  }

  export type InstructorCountAggregateInputType = {
    userId?: true
    majorId?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    userId: string
    majorId: string
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    majorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
    sections?: boolean | Instructor$sectionsArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    majorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    majorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    userId?: boolean
    majorId?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "majorId", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
    sections?: boolean | Instructor$sectionsArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      major: Prisma.$MajorPayload<ExtArgs>
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      majorId: string
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const instructorWithUserIdOnly = await prisma.instructor.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `userId`
     * const instructorWithUserIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `userId`
     * const instructorWithUserIdOnly = await prisma.instructor.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends Instructor$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly userId: FieldRef<"Instructor", 'String'>
    readonly majorId: FieldRef<"Instructor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.sections
   */
  export type Instructor$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model Major
   */

  export type AggregateMajor = {
    _count: MajorCountAggregateOutputType | null
    _avg: MajorAvgAggregateOutputType | null
    _sum: MajorSumAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  export type MajorAvgAggregateOutputType = {
    totalCreditHour: number | null
  }

  export type MajorSumAggregateOutputType = {
    totalCreditHour: number | null
  }

  export type MajorMinAggregateOutputType = {
    majorId: string | null
    majorCode: string | null
    majorName: string | null
    totalCreditHour: number | null
  }

  export type MajorMaxAggregateOutputType = {
    majorId: string | null
    majorCode: string | null
    majorName: string | null
    totalCreditHour: number | null
  }

  export type MajorCountAggregateOutputType = {
    majorId: number
    majorCode: number
    majorName: number
    totalCreditHour: number
    _all: number
  }


  export type MajorAvgAggregateInputType = {
    totalCreditHour?: true
  }

  export type MajorSumAggregateInputType = {
    totalCreditHour?: true
  }

  export type MajorMinAggregateInputType = {
    majorId?: true
    majorCode?: true
    majorName?: true
    totalCreditHour?: true
  }

  export type MajorMaxAggregateInputType = {
    majorId?: true
    majorCode?: true
    majorName?: true
    totalCreditHour?: true
  }

  export type MajorCountAggregateInputType = {
    majorId?: true
    majorCode?: true
    majorName?: true
    totalCreditHour?: true
    _all?: true
  }

  export type MajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Major to aggregate.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Majors
    **/
    _count?: true | MajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorMaxAggregateInputType
  }

  export type GetMajorAggregateType<T extends MajorAggregateArgs> = {
        [P in keyof T & keyof AggregateMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajor[P]>
      : GetScalarType<T[P], AggregateMajor[P]>
  }




  export type MajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithAggregationInput | MajorOrderByWithAggregationInput[]
    by: MajorScalarFieldEnum[] | MajorScalarFieldEnum
    having?: MajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCountAggregateInputType | true
    _avg?: MajorAvgAggregateInputType
    _sum?: MajorSumAggregateInputType
    _min?: MajorMinAggregateInputType
    _max?: MajorMaxAggregateInputType
  }

  export type MajorGroupByOutputType = {
    majorId: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    _count: MajorCountAggregateOutputType | null
    _avg: MajorAvgAggregateOutputType | null
    _sum: MajorSumAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  type GetMajorGroupByPayload<T extends MajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorGroupByOutputType[P]>
            : GetScalarType<T[P], MajorGroupByOutputType[P]>
        }
      >
    >


  export type MajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    majorCode?: boolean
    majorName?: boolean
    totalCreditHour?: boolean
    students?: boolean | Major$studentsArgs<ExtArgs>
    instructors?: boolean | Major$instructorsArgs<ExtArgs>
    courses?: boolean | Major$coursesArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["major"]>

  export type MajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    majorCode?: boolean
    majorName?: boolean
    totalCreditHour?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    majorCode?: boolean
    majorName?: boolean
    totalCreditHour?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectScalar = {
    majorId?: boolean
    majorCode?: boolean
    majorName?: boolean
    totalCreditHour?: boolean
  }

  export type MajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"majorId" | "majorCode" | "majorName" | "totalCreditHour", ExtArgs["result"]["major"]>
  export type MajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Major$studentsArgs<ExtArgs>
    instructors?: boolean | Major$instructorsArgs<ExtArgs>
    courses?: boolean | Major$coursesArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Major"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
      instructors: Prisma.$InstructorPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      majorId: string
      majorCode: string
      majorName: string
      totalCreditHour: number
    }, ExtArgs["result"]["major"]>
    composites: {}
  }

  type MajorGetPayload<S extends boolean | null | undefined | MajorDefaultArgs> = $Result.GetResult<Prisma.$MajorPayload, S>

  type MajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCountAggregateInputType | true
    }

  export interface MajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Major'], meta: { name: 'Major' } }
    /**
     * Find zero or one Major that matches the filter.
     * @param {MajorFindUniqueArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorFindUniqueArgs>(args: SelectSubset<T, MajorFindUniqueArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Major that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorFindUniqueOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorFindFirstArgs>(args?: SelectSubset<T, MajorFindFirstArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.major.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.major.findMany({ take: 10 })
     * 
     * // Only select the `majorId`
     * const majorWithMajorIdOnly = await prisma.major.findMany({ select: { majorId: true } })
     * 
     */
    findMany<T extends MajorFindManyArgs>(args?: SelectSubset<T, MajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Major.
     * @param {MajorCreateArgs} args - Arguments to create a Major.
     * @example
     * // Create one Major
     * const Major = await prisma.major.create({
     *   data: {
     *     // ... data to create a Major
     *   }
     * })
     * 
     */
    create<T extends MajorCreateArgs>(args: SelectSubset<T, MajorCreateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Majors.
     * @param {MajorCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCreateManyArgs>(args?: SelectSubset<T, MajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Majors and returns the data saved in the database.
     * @param {MajorCreateManyAndReturnArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Majors and only return the `majorId`
     * const majorWithMajorIdOnly = await prisma.major.createManyAndReturn({
     *   select: { majorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Major.
     * @param {MajorDeleteArgs} args - Arguments to delete one Major.
     * @example
     * // Delete one Major
     * const Major = await prisma.major.delete({
     *   where: {
     *     // ... filter to delete one Major
     *   }
     * })
     * 
     */
    delete<T extends MajorDeleteArgs>(args: SelectSubset<T, MajorDeleteArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Major.
     * @param {MajorUpdateArgs} args - Arguments to update one Major.
     * @example
     * // Update one Major
     * const major = await prisma.major.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorUpdateArgs>(args: SelectSubset<T, MajorUpdateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Majors.
     * @param {MajorDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.major.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorDeleteManyArgs>(args?: SelectSubset<T, MajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorUpdateManyArgs>(args: SelectSubset<T, MajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors and returns the data updated in the database.
     * @param {MajorUpdateManyAndReturnArgs} args - Arguments to update many Majors.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Majors and only return the `majorId`
     * const majorWithMajorIdOnly = await prisma.major.updateManyAndReturn({
     *   select: { majorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Major.
     * @param {MajorUpsertArgs} args - Arguments to update or create a Major.
     * @example
     * // Update or create a Major
     * const major = await prisma.major.upsert({
     *   create: {
     *     // ... data to create a Major
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Major we want to update
     *   }
     * })
     */
    upsert<T extends MajorUpsertArgs>(args: SelectSubset<T, MajorUpsertArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.major.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends MajorCountArgs>(
      args?: Subset<T, MajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MajorAggregateArgs>(args: Subset<T, MajorAggregateArgs>): Prisma.PrismaPromise<GetMajorAggregateType<T>>

    /**
     * Group by Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorGroupByArgs['orderBy'] }
        : { orderBy?: MajorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Major model
   */
  readonly fields: MajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Major.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Major$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Major$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructors<T extends Major$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Major$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Major$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Major$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Major model
   */
  interface MajorFieldRefs {
    readonly majorId: FieldRef<"Major", 'String'>
    readonly majorCode: FieldRef<"Major", 'String'>
    readonly majorName: FieldRef<"Major", 'String'>
    readonly totalCreditHour: FieldRef<"Major", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Major findUnique
   */
  export type MajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findUniqueOrThrow
   */
  export type MajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findFirst
   */
  export type MajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findFirstOrThrow
   */
  export type MajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findMany
   */
  export type MajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Majors to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major create
   */
  export type MajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to create a Major.
     */
    data: XOR<MajorCreateInput, MajorUncheckedCreateInput>
  }

  /**
   * Major createMany
   */
  export type MajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
  }

  /**
   * Major createManyAndReturn
   */
  export type MajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
  }

  /**
   * Major update
   */
  export type MajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to update a Major.
     */
    data: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
    /**
     * Choose, which Major to update.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major updateMany
   */
  export type MajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major updateManyAndReturn
   */
  export type MajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major upsert
   */
  export type MajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The filter to search for the Major to update in case it exists.
     */
    where: MajorWhereUniqueInput
    /**
     * In case the Major found by the `where` argument doesn't exist, create a new Major with this data.
     */
    create: XOR<MajorCreateInput, MajorUncheckedCreateInput>
    /**
     * In case the Major was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
  }

  /**
   * Major delete
   */
  export type MajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter which Major to delete.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major deleteMany
   */
  export type MajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Majors to delete
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to delete.
     */
    limit?: number
  }

  /**
   * Major.students
   */
  export type Major$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Major.instructors
   */
  export type Major$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    cursor?: InstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Major.courses
   */
  export type Major$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Major without action
   */
  export type MajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    creditHour: number | null
  }

  export type CourseSumAggregateOutputType = {
    creditHour: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    courseCode: string | null
    creditHour: number | null
    courseName: string | null
    isOngoing: boolean | null
    isRegistration: boolean | null
    majorId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    courseCode: string | null
    creditHour: number | null
    courseName: string | null
    isOngoing: boolean | null
    isRegistration: boolean | null
    majorId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseCode: number
    creditHour: number
    courseName: number
    isOngoing: number
    isRegistration: number
    majorId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    creditHour?: true
  }

  export type CourseSumAggregateInputType = {
    creditHour?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    courseCode?: true
    creditHour?: true
    courseName?: true
    isOngoing?: true
    isRegistration?: true
    majorId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseCode?: true
    creditHour?: true
    courseName?: true
    isOngoing?: true
    isRegistration?: true
    majorId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseCode?: true
    creditHour?: true
    courseName?: true
    isOngoing?: true
    isRegistration?: true
    majorId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseCode?: boolean
    creditHour?: boolean
    courseName?: boolean
    isOngoing?: boolean
    isRegistration?: boolean
    majorId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    sections?: boolean | Course$sectionsArgs<ExtArgs>
    registrations?: boolean | Course$registrationsArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    prerequisiteFor?: boolean | Course$prerequisiteForArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseCode?: boolean
    creditHour?: boolean
    courseName?: boolean
    isOngoing?: boolean
    isRegistration?: boolean
    majorId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseCode?: boolean
    creditHour?: boolean
    courseName?: boolean
    isOngoing?: boolean
    isRegistration?: boolean
    majorId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseCode?: boolean
    creditHour?: boolean
    courseName?: boolean
    isOngoing?: boolean
    isRegistration?: boolean
    majorId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseCode" | "creditHour" | "courseName" | "isOngoing" | "isRegistration" | "majorId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    sections?: boolean | Course$sectionsArgs<ExtArgs>
    registrations?: boolean | Course$registrationsArgs<ExtArgs>
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    prerequisiteFor?: boolean | Course$prerequisiteForArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      major: Prisma.$MajorPayload<ExtArgs>
      sections: Prisma.$SectionPayload<ExtArgs>[]
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      prerequisites: Prisma.$CoursePrerequisitePayload<ExtArgs>[]
      prerequisiteFor: Prisma.$CoursePrerequisitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseCode: string
      creditHour: number
      courseName: string
      isOngoing: boolean
      isRegistration: boolean
      majorId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends Course$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends Course$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Course$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisites<T extends Course$prerequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prerequisiteFor<T extends Course$prerequisiteForArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisiteForArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly courseCode: FieldRef<"Course", 'String'>
    readonly creditHour: FieldRef<"Course", 'Int'>
    readonly courseName: FieldRef<"Course", 'String'>
    readonly isOngoing: FieldRef<"Course", 'Boolean'>
    readonly isRegistration: FieldRef<"Course", 'Boolean'>
    readonly majorId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.sections
   */
  export type Course$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Course.registrations
   */
  export type Course$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Course.prerequisites
   */
  export type Course$prerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    where?: CoursePrerequisiteWhereInput
    orderBy?: CoursePrerequisiteOrderByWithRelationInput | CoursePrerequisiteOrderByWithRelationInput[]
    cursor?: CoursePrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePrerequisiteScalarFieldEnum | CoursePrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.prerequisiteFor
   */
  export type Course$prerequisiteForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    where?: CoursePrerequisiteWhereInput
    orderBy?: CoursePrerequisiteOrderByWithRelationInput | CoursePrerequisiteOrderByWithRelationInput[]
    cursor?: CoursePrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePrerequisiteScalarFieldEnum | CoursePrerequisiteScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CoursePrerequisite
   */

  export type AggregateCoursePrerequisite = {
    _count: CoursePrerequisiteCountAggregateOutputType | null
    _min: CoursePrerequisiteMinAggregateOutputType | null
    _max: CoursePrerequisiteMaxAggregateOutputType | null
  }

  export type CoursePrerequisiteMinAggregateOutputType = {
    courseId: string | null
    prerequisiteId: string | null
  }

  export type CoursePrerequisiteMaxAggregateOutputType = {
    courseId: string | null
    prerequisiteId: string | null
  }

  export type CoursePrerequisiteCountAggregateOutputType = {
    courseId: number
    prerequisiteId: number
    _all: number
  }


  export type CoursePrerequisiteMinAggregateInputType = {
    courseId?: true
    prerequisiteId?: true
  }

  export type CoursePrerequisiteMaxAggregateInputType = {
    courseId?: true
    prerequisiteId?: true
  }

  export type CoursePrerequisiteCountAggregateInputType = {
    courseId?: true
    prerequisiteId?: true
    _all?: true
  }

  export type CoursePrerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePrerequisite to aggregate.
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePrerequisites to fetch.
     */
    orderBy?: CoursePrerequisiteOrderByWithRelationInput | CoursePrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursePrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePrerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePrerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursePrerequisites
    **/
    _count?: true | CoursePrerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursePrerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursePrerequisiteMaxAggregateInputType
  }

  export type GetCoursePrerequisiteAggregateType<T extends CoursePrerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursePrerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursePrerequisite[P]>
      : GetScalarType<T[P], AggregateCoursePrerequisite[P]>
  }




  export type CoursePrerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePrerequisiteWhereInput
    orderBy?: CoursePrerequisiteOrderByWithAggregationInput | CoursePrerequisiteOrderByWithAggregationInput[]
    by: CoursePrerequisiteScalarFieldEnum[] | CoursePrerequisiteScalarFieldEnum
    having?: CoursePrerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursePrerequisiteCountAggregateInputType | true
    _min?: CoursePrerequisiteMinAggregateInputType
    _max?: CoursePrerequisiteMaxAggregateInputType
  }

  export type CoursePrerequisiteGroupByOutputType = {
    courseId: string
    prerequisiteId: string
    _count: CoursePrerequisiteCountAggregateOutputType | null
    _min: CoursePrerequisiteMinAggregateOutputType | null
    _max: CoursePrerequisiteMaxAggregateOutputType | null
  }

  type GetCoursePrerequisiteGroupByPayload<T extends CoursePrerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursePrerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursePrerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursePrerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], CoursePrerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type CoursePrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    prerequisiteId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePrerequisite"]>

  export type CoursePrerequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    prerequisiteId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePrerequisite"]>

  export type CoursePrerequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    prerequisiteId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePrerequisite"]>

  export type CoursePrerequisiteSelectScalar = {
    courseId?: boolean
    prerequisiteId?: boolean
  }

  export type CoursePrerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"courseId" | "prerequisiteId", ExtArgs["result"]["coursePrerequisite"]>
  export type CoursePrerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CoursePrerequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CoursePrerequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    prerequisite?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CoursePrerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursePrerequisite"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      prerequisite: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      courseId: string
      prerequisiteId: string
    }, ExtArgs["result"]["coursePrerequisite"]>
    composites: {}
  }

  type CoursePrerequisiteGetPayload<S extends boolean | null | undefined | CoursePrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$CoursePrerequisitePayload, S>

  type CoursePrerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursePrerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursePrerequisiteCountAggregateInputType | true
    }

  export interface CoursePrerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursePrerequisite'], meta: { name: 'CoursePrerequisite' } }
    /**
     * Find zero or one CoursePrerequisite that matches the filter.
     * @param {CoursePrerequisiteFindUniqueArgs} args - Arguments to find a CoursePrerequisite
     * @example
     * // Get one CoursePrerequisite
     * const coursePrerequisite = await prisma.coursePrerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursePrerequisiteFindUniqueArgs>(args: SelectSubset<T, CoursePrerequisiteFindUniqueArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoursePrerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursePrerequisiteFindUniqueOrThrowArgs} args - Arguments to find a CoursePrerequisite
     * @example
     * // Get one CoursePrerequisite
     * const coursePrerequisite = await prisma.coursePrerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursePrerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursePrerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePrerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteFindFirstArgs} args - Arguments to find a CoursePrerequisite
     * @example
     * // Get one CoursePrerequisite
     * const coursePrerequisite = await prisma.coursePrerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursePrerequisiteFindFirstArgs>(args?: SelectSubset<T, CoursePrerequisiteFindFirstArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePrerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteFindFirstOrThrowArgs} args - Arguments to find a CoursePrerequisite
     * @example
     * // Get one CoursePrerequisite
     * const coursePrerequisite = await prisma.coursePrerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursePrerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursePrerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursePrerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursePrerequisites
     * const coursePrerequisites = await prisma.coursePrerequisite.findMany()
     * 
     * // Get first 10 CoursePrerequisites
     * const coursePrerequisites = await prisma.coursePrerequisite.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const coursePrerequisiteWithCourseIdOnly = await prisma.coursePrerequisite.findMany({ select: { courseId: true } })
     * 
     */
    findMany<T extends CoursePrerequisiteFindManyArgs>(args?: SelectSubset<T, CoursePrerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoursePrerequisite.
     * @param {CoursePrerequisiteCreateArgs} args - Arguments to create a CoursePrerequisite.
     * @example
     * // Create one CoursePrerequisite
     * const CoursePrerequisite = await prisma.coursePrerequisite.create({
     *   data: {
     *     // ... data to create a CoursePrerequisite
     *   }
     * })
     * 
     */
    create<T extends CoursePrerequisiteCreateArgs>(args: SelectSubset<T, CoursePrerequisiteCreateArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoursePrerequisites.
     * @param {CoursePrerequisiteCreateManyArgs} args - Arguments to create many CoursePrerequisites.
     * @example
     * // Create many CoursePrerequisites
     * const coursePrerequisite = await prisma.coursePrerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursePrerequisiteCreateManyArgs>(args?: SelectSubset<T, CoursePrerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoursePrerequisites and returns the data saved in the database.
     * @param {CoursePrerequisiteCreateManyAndReturnArgs} args - Arguments to create many CoursePrerequisites.
     * @example
     * // Create many CoursePrerequisites
     * const coursePrerequisite = await prisma.coursePrerequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoursePrerequisites and only return the `courseId`
     * const coursePrerequisiteWithCourseIdOnly = await prisma.coursePrerequisite.createManyAndReturn({
     *   select: { courseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursePrerequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursePrerequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoursePrerequisite.
     * @param {CoursePrerequisiteDeleteArgs} args - Arguments to delete one CoursePrerequisite.
     * @example
     * // Delete one CoursePrerequisite
     * const CoursePrerequisite = await prisma.coursePrerequisite.delete({
     *   where: {
     *     // ... filter to delete one CoursePrerequisite
     *   }
     * })
     * 
     */
    delete<T extends CoursePrerequisiteDeleteArgs>(args: SelectSubset<T, CoursePrerequisiteDeleteArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoursePrerequisite.
     * @param {CoursePrerequisiteUpdateArgs} args - Arguments to update one CoursePrerequisite.
     * @example
     * // Update one CoursePrerequisite
     * const coursePrerequisite = await prisma.coursePrerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursePrerequisiteUpdateArgs>(args: SelectSubset<T, CoursePrerequisiteUpdateArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoursePrerequisites.
     * @param {CoursePrerequisiteDeleteManyArgs} args - Arguments to filter CoursePrerequisites to delete.
     * @example
     * // Delete a few CoursePrerequisites
     * const { count } = await prisma.coursePrerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursePrerequisiteDeleteManyArgs>(args?: SelectSubset<T, CoursePrerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePrerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursePrerequisites
     * const coursePrerequisite = await prisma.coursePrerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursePrerequisiteUpdateManyArgs>(args: SelectSubset<T, CoursePrerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePrerequisites and returns the data updated in the database.
     * @param {CoursePrerequisiteUpdateManyAndReturnArgs} args - Arguments to update many CoursePrerequisites.
     * @example
     * // Update many CoursePrerequisites
     * const coursePrerequisite = await prisma.coursePrerequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoursePrerequisites and only return the `courseId`
     * const coursePrerequisiteWithCourseIdOnly = await prisma.coursePrerequisite.updateManyAndReturn({
     *   select: { courseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursePrerequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursePrerequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoursePrerequisite.
     * @param {CoursePrerequisiteUpsertArgs} args - Arguments to update or create a CoursePrerequisite.
     * @example
     * // Update or create a CoursePrerequisite
     * const coursePrerequisite = await prisma.coursePrerequisite.upsert({
     *   create: {
     *     // ... data to create a CoursePrerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursePrerequisite we want to update
     *   }
     * })
     */
    upsert<T extends CoursePrerequisiteUpsertArgs>(args: SelectSubset<T, CoursePrerequisiteUpsertArgs<ExtArgs>>): Prisma__CoursePrerequisiteClient<$Result.GetResult<Prisma.$CoursePrerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoursePrerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteCountArgs} args - Arguments to filter CoursePrerequisites to count.
     * @example
     * // Count the number of CoursePrerequisites
     * const count = await prisma.coursePrerequisite.count({
     *   where: {
     *     // ... the filter for the CoursePrerequisites we want to count
     *   }
     * })
    **/
    count<T extends CoursePrerequisiteCountArgs>(
      args?: Subset<T, CoursePrerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursePrerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursePrerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursePrerequisiteAggregateArgs>(args: Subset<T, CoursePrerequisiteAggregateArgs>): Prisma.PrismaPromise<GetCoursePrerequisiteAggregateType<T>>

    /**
     * Group by CoursePrerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePrerequisiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursePrerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursePrerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: CoursePrerequisiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursePrerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursePrerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursePrerequisite model
   */
  readonly fields: CoursePrerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursePrerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursePrerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prerequisite<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoursePrerequisite model
   */
  interface CoursePrerequisiteFieldRefs {
    readonly courseId: FieldRef<"CoursePrerequisite", 'String'>
    readonly prerequisiteId: FieldRef<"CoursePrerequisite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CoursePrerequisite findUnique
   */
  export type CoursePrerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which CoursePrerequisite to fetch.
     */
    where: CoursePrerequisiteWhereUniqueInput
  }

  /**
   * CoursePrerequisite findUniqueOrThrow
   */
  export type CoursePrerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which CoursePrerequisite to fetch.
     */
    where: CoursePrerequisiteWhereUniqueInput
  }

  /**
   * CoursePrerequisite findFirst
   */
  export type CoursePrerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which CoursePrerequisite to fetch.
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePrerequisites to fetch.
     */
    orderBy?: CoursePrerequisiteOrderByWithRelationInput | CoursePrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePrerequisites.
     */
    cursor?: CoursePrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePrerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePrerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePrerequisites.
     */
    distinct?: CoursePrerequisiteScalarFieldEnum | CoursePrerequisiteScalarFieldEnum[]
  }

  /**
   * CoursePrerequisite findFirstOrThrow
   */
  export type CoursePrerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which CoursePrerequisite to fetch.
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePrerequisites to fetch.
     */
    orderBy?: CoursePrerequisiteOrderByWithRelationInput | CoursePrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePrerequisites.
     */
    cursor?: CoursePrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePrerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePrerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePrerequisites.
     */
    distinct?: CoursePrerequisiteScalarFieldEnum | CoursePrerequisiteScalarFieldEnum[]
  }

  /**
   * CoursePrerequisite findMany
   */
  export type CoursePrerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which CoursePrerequisites to fetch.
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePrerequisites to fetch.
     */
    orderBy?: CoursePrerequisiteOrderByWithRelationInput | CoursePrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursePrerequisites.
     */
    cursor?: CoursePrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePrerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePrerequisites.
     */
    skip?: number
    distinct?: CoursePrerequisiteScalarFieldEnum | CoursePrerequisiteScalarFieldEnum[]
  }

  /**
   * CoursePrerequisite create
   */
  export type CoursePrerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a CoursePrerequisite.
     */
    data: XOR<CoursePrerequisiteCreateInput, CoursePrerequisiteUncheckedCreateInput>
  }

  /**
   * CoursePrerequisite createMany
   */
  export type CoursePrerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursePrerequisites.
     */
    data: CoursePrerequisiteCreateManyInput | CoursePrerequisiteCreateManyInput[]
  }

  /**
   * CoursePrerequisite createManyAndReturn
   */
  export type CoursePrerequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many CoursePrerequisites.
     */
    data: CoursePrerequisiteCreateManyInput | CoursePrerequisiteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursePrerequisite update
   */
  export type CoursePrerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a CoursePrerequisite.
     */
    data: XOR<CoursePrerequisiteUpdateInput, CoursePrerequisiteUncheckedUpdateInput>
    /**
     * Choose, which CoursePrerequisite to update.
     */
    where: CoursePrerequisiteWhereUniqueInput
  }

  /**
   * CoursePrerequisite updateMany
   */
  export type CoursePrerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursePrerequisites.
     */
    data: XOR<CoursePrerequisiteUpdateManyMutationInput, CoursePrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which CoursePrerequisites to update
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * Limit how many CoursePrerequisites to update.
     */
    limit?: number
  }

  /**
   * CoursePrerequisite updateManyAndReturn
   */
  export type CoursePrerequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to update CoursePrerequisites.
     */
    data: XOR<CoursePrerequisiteUpdateManyMutationInput, CoursePrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which CoursePrerequisites to update
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * Limit how many CoursePrerequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursePrerequisite upsert
   */
  export type CoursePrerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the CoursePrerequisite to update in case it exists.
     */
    where: CoursePrerequisiteWhereUniqueInput
    /**
     * In case the CoursePrerequisite found by the `where` argument doesn't exist, create a new CoursePrerequisite with this data.
     */
    create: XOR<CoursePrerequisiteCreateInput, CoursePrerequisiteUncheckedCreateInput>
    /**
     * In case the CoursePrerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursePrerequisiteUpdateInput, CoursePrerequisiteUncheckedUpdateInput>
  }

  /**
   * CoursePrerequisite delete
   */
  export type CoursePrerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
    /**
     * Filter which CoursePrerequisite to delete.
     */
    where: CoursePrerequisiteWhereUniqueInput
  }

  /**
   * CoursePrerequisite deleteMany
   */
  export type CoursePrerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePrerequisites to delete
     */
    where?: CoursePrerequisiteWhereInput
    /**
     * Limit how many CoursePrerequisites to delete.
     */
    limit?: number
  }

  /**
   * CoursePrerequisite without action
   */
  export type CoursePrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePrerequisite
     */
    select?: CoursePrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePrerequisite
     */
    omit?: CoursePrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePrerequisiteInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    currentSeats: number | null
    totalSeats: number | null
  }

  export type SectionSumAggregateOutputType = {
    currentSeats: number | null
    totalSeats: number | null
  }

  export type SectionMinAggregateOutputType = {
    sectionId: string | null
    currentSeats: number | null
    totalSeats: number | null
    semester: string | null
    days: string | null
    time: string | null
    location: string | null
    approvalStatus: $Enums.ApprovalStatus | null
    sectionStatus: $Enums.SectionStatus | null
    courseId: string | null
    instructorId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    sectionId: string | null
    currentSeats: number | null
    totalSeats: number | null
    semester: string | null
    days: string | null
    time: string | null
    location: string | null
    approvalStatus: $Enums.ApprovalStatus | null
    sectionStatus: $Enums.SectionStatus | null
    courseId: string | null
    instructorId: string | null
  }

  export type SectionCountAggregateOutputType = {
    sectionId: number
    currentSeats: number
    totalSeats: number
    semester: number
    days: number
    time: number
    location: number
    approvalStatus: number
    sectionStatus: number
    courseId: number
    instructorId: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    currentSeats?: true
    totalSeats?: true
  }

  export type SectionSumAggregateInputType = {
    currentSeats?: true
    totalSeats?: true
  }

  export type SectionMinAggregateInputType = {
    sectionId?: true
    currentSeats?: true
    totalSeats?: true
    semester?: true
    days?: true
    time?: true
    location?: true
    approvalStatus?: true
    sectionStatus?: true
    courseId?: true
    instructorId?: true
  }

  export type SectionMaxAggregateInputType = {
    sectionId?: true
    currentSeats?: true
    totalSeats?: true
    semester?: true
    days?: true
    time?: true
    location?: true
    approvalStatus?: true
    sectionStatus?: true
    courseId?: true
    instructorId?: true
  }

  export type SectionCountAggregateInputType = {
    sectionId?: true
    currentSeats?: true
    totalSeats?: true
    semester?: true
    days?: true
    time?: true
    location?: true
    approvalStatus?: true
    sectionStatus?: true
    courseId?: true
    instructorId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    sectionId: string
    currentSeats: number
    totalSeats: number
    semester: string
    days: string | null
    time: string | null
    location: string | null
    approvalStatus: $Enums.ApprovalStatus
    sectionStatus: $Enums.SectionStatus
    courseId: string
    instructorId: string
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    currentSeats?: boolean
    totalSeats?: boolean
    semester?: boolean
    days?: boolean
    time?: boolean
    location?: boolean
    approvalStatus?: boolean
    sectionStatus?: boolean
    courseId?: boolean
    instructorId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    registrations?: boolean | Section$registrationsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    currentSeats?: boolean
    totalSeats?: boolean
    semester?: boolean
    days?: boolean
    time?: boolean
    location?: boolean
    approvalStatus?: boolean
    sectionStatus?: boolean
    courseId?: boolean
    instructorId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    currentSeats?: boolean
    totalSeats?: boolean
    semester?: boolean
    days?: boolean
    time?: boolean
    location?: boolean
    approvalStatus?: boolean
    sectionStatus?: boolean
    courseId?: boolean
    instructorId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    sectionId?: boolean
    currentSeats?: boolean
    totalSeats?: boolean
    semester?: boolean
    days?: boolean
    time?: boolean
    location?: boolean
    approvalStatus?: boolean
    sectionStatus?: boolean
    courseId?: boolean
    instructorId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sectionId" | "currentSeats" | "totalSeats" | "semester" | "days" | "time" | "location" | "approvalStatus" | "sectionStatus" | "courseId" | "instructorId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    registrations?: boolean | Section$registrationsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      instructor: Prisma.$InstructorPayload<ExtArgs>
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sectionId: string
      currentSeats: number
      totalSeats: number
      semester: string
      days: string | null
      time: string | null
      location: string | null
      approvalStatus: $Enums.ApprovalStatus
      sectionStatus: $Enums.SectionStatus
      courseId: string
      instructorId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `sectionId`
     * const sectionWithSectionIdOnly = await prisma.section.findMany({ select: { sectionId: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `sectionId`
     * const sectionWithSectionIdOnly = await prisma.section.createManyAndReturn({
     *   select: { sectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `sectionId`
     * const sectionWithSectionIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { sectionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Section$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Section$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly sectionId: FieldRef<"Section", 'String'>
    readonly currentSeats: FieldRef<"Section", 'Int'>
    readonly totalSeats: FieldRef<"Section", 'Int'>
    readonly semester: FieldRef<"Section", 'String'>
    readonly days: FieldRef<"Section", 'String'>
    readonly time: FieldRef<"Section", 'String'>
    readonly location: FieldRef<"Section", 'String'>
    readonly approvalStatus: FieldRef<"Section", 'ApprovalStatus'>
    readonly sectionStatus: FieldRef<"Section", 'SectionStatus'>
    readonly courseId: FieldRef<"Section", 'String'>
    readonly instructorId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.registrations
   */
  export type Section$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: string | null
    sectionId: string | null
    studentId: string | null
    courseId: string | null
    grade: string | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: string | null
    sectionId: string | null
    studentId: string | null
    courseId: string | null
    grade: string | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    sectionId: number
    studentId: number
    courseId: number
    grade: number
    _all: number
  }


  export type RegistrationMinAggregateInputType = {
    id?: true
    sectionId?: true
    studentId?: true
    courseId?: true
    grade?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    sectionId?: true
    studentId?: true
    courseId?: true
    grade?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    sectionId?: true
    studentId?: true
    courseId?: true
    grade?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: string
    sectionId: string
    studentId: string
    courseId: string
    grade: string
    _count: RegistrationCountAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectScalar = {
    id?: boolean
    sectionId?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "studentId" | "courseId" | "grade", ExtArgs["result"]["registration"]>
  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionId: string
      studentId: string
      courseId: string
      grade: string
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrations and returns the data saved in the database.
     * @param {RegistrationCreateManyAndReturnArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations and returns the data updated in the database.
     * @param {RegistrationUpdateManyAndReturnArgs} args - Arguments to update many Registrations.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registration model
   */
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'String'>
    readonly sectionId: FieldRef<"Registration", 'String'>
    readonly studentId: FieldRef<"Registration", 'String'>
    readonly courseId: FieldRef<"Registration", 'String'>
    readonly grade: FieldRef<"Registration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
  }

  /**
   * Registration createManyAndReturn
   */
  export type RegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration updateManyAndReturn
   */
  export type RegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    userId: 'userId',
    gpa: 'gpa',
    finishedCreditHour: 'finishedCreditHour',
    majorId: 'majorId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    userId: 'userId',
    majorId: 'majorId'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const MajorScalarFieldEnum: {
    majorId: 'majorId',
    majorCode: 'majorCode',
    majorName: 'majorName',
    totalCreditHour: 'totalCreditHour'
  };

  export type MajorScalarFieldEnum = (typeof MajorScalarFieldEnum)[keyof typeof MajorScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseCode: 'courseCode',
    creditHour: 'creditHour',
    courseName: 'courseName',
    isOngoing: 'isOngoing',
    isRegistration: 'isRegistration',
    majorId: 'majorId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CoursePrerequisiteScalarFieldEnum: {
    courseId: 'courseId',
    prerequisiteId: 'prerequisiteId'
  };

  export type CoursePrerequisiteScalarFieldEnum = (typeof CoursePrerequisiteScalarFieldEnum)[keyof typeof CoursePrerequisiteScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    sectionId: 'sectionId',
    currentSeats: 'currentSeats',
    totalSeats: 'totalSeats',
    semester: 'semester',
    days: 'days',
    time: 'time',
    location: 'location',
    approvalStatus: 'approvalStatus',
    sectionStatus: 'sectionStatus',
    courseId: 'courseId',
    instructorId: 'instructorId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    studentId: 'studentId',
    courseId: 'courseId',
    grade: 'grade'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Roles'
   */
  export type EnumRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Roles'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'SectionStatus'
   */
  export type EnumSectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    Instructor?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    Admin?: AdminOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
    Instructor?: InstructorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRolesFilter<"User"> | $Enums.Roles
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    Instructor?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
  }, "userId" | "username">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRolesWithAggregatesFilter<"User"> | $Enums.Roles
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type AdminOrderByWithAggregationInput = {
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    userId?: StringFilter<"Student"> | string
    gpa?: FloatFilter<"Student"> | number
    finishedCreditHour?: IntFilter<"Student"> | number
    majorId?: StringFilter<"Student"> | string
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: RegistrationListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    userId?: SortOrder
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
    majorId?: SortOrder
    major?: MajorOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    registrations?: RegistrationOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    gpa?: FloatFilter<"Student"> | number
    finishedCreditHour?: IntFilter<"Student"> | number
    majorId?: StringFilter<"Student"> | string
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: RegistrationListRelationFilter
  }, "userId">

  export type StudentOrderByWithAggregationInput = {
    userId?: SortOrder
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
    majorId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Student"> | string
    gpa?: FloatWithAggregatesFilter<"Student"> | number
    finishedCreditHour?: IntWithAggregatesFilter<"Student"> | number
    majorId?: StringWithAggregatesFilter<"Student"> | string
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    userId?: StringFilter<"Instructor"> | string
    majorId?: StringFilter<"Instructor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    sections?: SectionListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    userId?: SortOrder
    majorId?: SortOrder
    user?: UserOrderByWithRelationInput
    major?: MajorOrderByWithRelationInput
    sections?: SectionOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    majorId?: StringFilter<"Instructor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    sections?: SectionListRelationFilter
  }, "userId">

  export type InstructorOrderByWithAggregationInput = {
    userId?: SortOrder
    majorId?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Instructor"> | string
    majorId?: StringWithAggregatesFilter<"Instructor"> | string
  }

  export type MajorWhereInput = {
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    majorId?: StringFilter<"Major"> | string
    majorCode?: StringFilter<"Major"> | string
    majorName?: StringFilter<"Major"> | string
    totalCreditHour?: IntFilter<"Major"> | number
    students?: StudentListRelationFilter
    instructors?: InstructorListRelationFilter
    courses?: CourseListRelationFilter
  }

  export type MajorOrderByWithRelationInput = {
    majorId?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
    totalCreditHour?: SortOrder
    students?: StudentOrderByRelationAggregateInput
    instructors?: InstructorOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type MajorWhereUniqueInput = Prisma.AtLeast<{
    majorId?: string
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    majorCode?: StringFilter<"Major"> | string
    majorName?: StringFilter<"Major"> | string
    totalCreditHour?: IntFilter<"Major"> | number
    students?: StudentListRelationFilter
    instructors?: InstructorListRelationFilter
    courses?: CourseListRelationFilter
  }, "majorId">

  export type MajorOrderByWithAggregationInput = {
    majorId?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
    totalCreditHour?: SortOrder
    _count?: MajorCountOrderByAggregateInput
    _avg?: MajorAvgOrderByAggregateInput
    _max?: MajorMaxOrderByAggregateInput
    _min?: MajorMinOrderByAggregateInput
    _sum?: MajorSumOrderByAggregateInput
  }

  export type MajorScalarWhereWithAggregatesInput = {
    AND?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    OR?: MajorScalarWhereWithAggregatesInput[]
    NOT?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    majorId?: StringWithAggregatesFilter<"Major"> | string
    majorCode?: StringWithAggregatesFilter<"Major"> | string
    majorName?: StringWithAggregatesFilter<"Major"> | string
    totalCreditHour?: IntWithAggregatesFilter<"Major"> | number
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    courseCode?: StringFilter<"Course"> | string
    creditHour?: IntFilter<"Course"> | number
    courseName?: StringFilter<"Course"> | string
    isOngoing?: BoolFilter<"Course"> | boolean
    isRegistration?: BoolFilter<"Course"> | boolean
    majorId?: StringFilter<"Course"> | string
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    sections?: SectionListRelationFilter
    registrations?: RegistrationListRelationFilter
    prerequisites?: CoursePrerequisiteListRelationFilter
    prerequisiteFor?: CoursePrerequisiteListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseCode?: SortOrder
    creditHour?: SortOrder
    courseName?: SortOrder
    isOngoing?: SortOrder
    isRegistration?: SortOrder
    majorId?: SortOrder
    major?: MajorOrderByWithRelationInput
    sections?: SectionOrderByRelationAggregateInput
    registrations?: RegistrationOrderByRelationAggregateInput
    prerequisites?: CoursePrerequisiteOrderByRelationAggregateInput
    prerequisiteFor?: CoursePrerequisiteOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseCode?: StringFilter<"Course"> | string
    creditHour?: IntFilter<"Course"> | number
    courseName?: StringFilter<"Course"> | string
    isOngoing?: BoolFilter<"Course"> | boolean
    isRegistration?: BoolFilter<"Course"> | boolean
    majorId?: StringFilter<"Course"> | string
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    sections?: SectionListRelationFilter
    registrations?: RegistrationListRelationFilter
    prerequisites?: CoursePrerequisiteListRelationFilter
    prerequisiteFor?: CoursePrerequisiteListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseCode?: SortOrder
    creditHour?: SortOrder
    courseName?: SortOrder
    isOngoing?: SortOrder
    isRegistration?: SortOrder
    majorId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    courseCode?: StringWithAggregatesFilter<"Course"> | string
    creditHour?: IntWithAggregatesFilter<"Course"> | number
    courseName?: StringWithAggregatesFilter<"Course"> | string
    isOngoing?: BoolWithAggregatesFilter<"Course"> | boolean
    isRegistration?: BoolWithAggregatesFilter<"Course"> | boolean
    majorId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type CoursePrerequisiteWhereInput = {
    AND?: CoursePrerequisiteWhereInput | CoursePrerequisiteWhereInput[]
    OR?: CoursePrerequisiteWhereInput[]
    NOT?: CoursePrerequisiteWhereInput | CoursePrerequisiteWhereInput[]
    courseId?: StringFilter<"CoursePrerequisite"> | string
    prerequisiteId?: StringFilter<"CoursePrerequisite"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    prerequisite?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CoursePrerequisiteOrderByWithRelationInput = {
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    course?: CourseOrderByWithRelationInput
    prerequisite?: CourseOrderByWithRelationInput
  }

  export type CoursePrerequisiteWhereUniqueInput = Prisma.AtLeast<{
    courseId_prerequisiteId?: CoursePrerequisiteCourseIdPrerequisiteIdCompoundUniqueInput
    AND?: CoursePrerequisiteWhereInput | CoursePrerequisiteWhereInput[]
    OR?: CoursePrerequisiteWhereInput[]
    NOT?: CoursePrerequisiteWhereInput | CoursePrerequisiteWhereInput[]
    courseId?: StringFilter<"CoursePrerequisite"> | string
    prerequisiteId?: StringFilter<"CoursePrerequisite"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    prerequisite?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "courseId_prerequisiteId">

  export type CoursePrerequisiteOrderByWithAggregationInput = {
    courseId?: SortOrder
    prerequisiteId?: SortOrder
    _count?: CoursePrerequisiteCountOrderByAggregateInput
    _max?: CoursePrerequisiteMaxOrderByAggregateInput
    _min?: CoursePrerequisiteMinOrderByAggregateInput
  }

  export type CoursePrerequisiteScalarWhereWithAggregatesInput = {
    AND?: CoursePrerequisiteScalarWhereWithAggregatesInput | CoursePrerequisiteScalarWhereWithAggregatesInput[]
    OR?: CoursePrerequisiteScalarWhereWithAggregatesInput[]
    NOT?: CoursePrerequisiteScalarWhereWithAggregatesInput | CoursePrerequisiteScalarWhereWithAggregatesInput[]
    courseId?: StringWithAggregatesFilter<"CoursePrerequisite"> | string
    prerequisiteId?: StringWithAggregatesFilter<"CoursePrerequisite"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    sectionId?: StringFilter<"Section"> | string
    currentSeats?: IntFilter<"Section"> | number
    totalSeats?: IntFilter<"Section"> | number
    semester?: StringFilter<"Section"> | string
    days?: StringNullableFilter<"Section"> | string | null
    time?: StringNullableFilter<"Section"> | string | null
    location?: StringNullableFilter<"Section"> | string | null
    approvalStatus?: EnumApprovalStatusFilter<"Section"> | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFilter<"Section"> | $Enums.SectionStatus
    courseId?: StringFilter<"Section"> | string
    instructorId?: StringFilter<"Section"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    registrations?: RegistrationListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    sectionId?: SortOrder
    currentSeats?: SortOrder
    totalSeats?: SortOrder
    semester?: SortOrder
    days?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    approvalStatus?: SortOrder
    sectionStatus?: SortOrder
    courseId?: SortOrder
    instructorId?: SortOrder
    course?: CourseOrderByWithRelationInput
    instructor?: InstructorOrderByWithRelationInput
    registrations?: RegistrationOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    sectionId?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    currentSeats?: IntFilter<"Section"> | number
    totalSeats?: IntFilter<"Section"> | number
    semester?: StringFilter<"Section"> | string
    days?: StringNullableFilter<"Section"> | string | null
    time?: StringNullableFilter<"Section"> | string | null
    location?: StringNullableFilter<"Section"> | string | null
    approvalStatus?: EnumApprovalStatusFilter<"Section"> | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFilter<"Section"> | $Enums.SectionStatus
    courseId?: StringFilter<"Section"> | string
    instructorId?: StringFilter<"Section"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    registrations?: RegistrationListRelationFilter
  }, "sectionId">

  export type SectionOrderByWithAggregationInput = {
    sectionId?: SortOrder
    currentSeats?: SortOrder
    totalSeats?: SortOrder
    semester?: SortOrder
    days?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    approvalStatus?: SortOrder
    sectionStatus?: SortOrder
    courseId?: SortOrder
    instructorId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    sectionId?: StringWithAggregatesFilter<"Section"> | string
    currentSeats?: IntWithAggregatesFilter<"Section"> | number
    totalSeats?: IntWithAggregatesFilter<"Section"> | number
    semester?: StringWithAggregatesFilter<"Section"> | string
    days?: StringNullableWithAggregatesFilter<"Section"> | string | null
    time?: StringNullableWithAggregatesFilter<"Section"> | string | null
    location?: StringNullableWithAggregatesFilter<"Section"> | string | null
    approvalStatus?: EnumApprovalStatusWithAggregatesFilter<"Section"> | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusWithAggregatesFilter<"Section"> | $Enums.SectionStatus
    courseId?: StringWithAggregatesFilter<"Section"> | string
    instructorId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: StringFilter<"Registration"> | string
    sectionId?: StringFilter<"Registration"> | string
    studentId?: StringFilter<"Registration"> | string
    courseId?: StringFilter<"Registration"> | string
    grade?: StringFilter<"Registration"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
    section?: SectionOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectionId_studentId?: RegistrationSectionIdStudentIdCompoundUniqueInput
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    sectionId?: StringFilter<"Registration"> | string
    studentId?: StringFilter<"Registration"> | string
    courseId?: StringFilter<"Registration"> | string
    grade?: StringFilter<"Registration"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "sectionId_studentId">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registration"> | string
    sectionId?: StringWithAggregatesFilter<"Registration"> | string
    studentId?: StringWithAggregatesFilter<"Registration"> | string
    courseId?: StringWithAggregatesFilter<"Registration"> | string
    grade?: StringWithAggregatesFilter<"Registration"> | string
  }

  export type UserCreateInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Admin?: AdminCreateNestedOneWithoutUserInput
    Student?: StudentCreateNestedOneWithoutUserInput
    Instructor?: InstructorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Instructor?: InstructorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Admin?: AdminUpdateOneWithoutUserNestedInput
    Student?: StudentUpdateOneWithoutUserNestedInput
    Instructor?: InstructorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Instructor?: InstructorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
  }

  export type AdminCreateInput = {
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    userId: string
  }

  export type AdminUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    userId: string
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    gpa: number
    finishedCreditHour: number
    major: MajorCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
    registrations?: RegistrationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    userId: string
    gpa: number
    finishedCreditHour: number
    majorId: string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    major?: MajorUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    registrations?: RegistrationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    majorId?: StringFieldUpdateOperationsInput | string
    registrations?: RegistrationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    userId: string
    gpa: number
    finishedCreditHour: number
    majorId: string
  }

  export type StudentUpdateManyMutationInput = {
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
  }

  export type StudentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorCreateInput = {
    user: UserCreateNestedOneWithoutInstructorInput
    major: MajorCreateNestedOneWithoutInstructorsInput
    sections?: SectionCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateInput = {
    userId: string
    majorId: string
    sections?: SectionUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUpdateInput = {
    user?: UserUpdateOneRequiredWithoutInstructorNestedInput
    major?: MajorUpdateOneRequiredWithoutInstructorsNestedInput
    sections?: SectionUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorCreateManyInput = {
    userId: string
    majorId: string
  }

  export type InstructorUpdateManyMutationInput = {

  }

  export type InstructorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type MajorCreateInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    students?: StudentCreateNestedManyWithoutMajorInput
    instructors?: InstructorCreateNestedManyWithoutMajorInput
    courses?: CourseCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    students?: StudentUncheckedCreateNestedManyWithoutMajorInput
    instructors?: InstructorUncheckedCreateNestedManyWithoutMajorInput
    courses?: CourseUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorUpdateInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    students?: StudentUpdateManyWithoutMajorNestedInput
    instructors?: InstructorUpdateManyWithoutMajorNestedInput
    courses?: CourseUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutMajorNestedInput
    instructors?: InstructorUncheckedUpdateManyWithoutMajorNestedInput
    courses?: CourseUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type MajorCreateManyInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
  }

  export type MajorUpdateManyMutationInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
  }

  export type MajorUncheckedUpdateManyInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    major: MajorCreateNestedOneWithoutCoursesInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    registrations?: RegistrationCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    majorId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePrerequisiteCreateInput = {
    course: CourseCreateNestedOneWithoutPrerequisitesInput
    prerequisite: CourseCreateNestedOneWithoutPrerequisiteForInput
  }

  export type CoursePrerequisiteUncheckedCreateInput = {
    courseId: string
    prerequisiteId: string
  }

  export type CoursePrerequisiteUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
    prerequisite?: CourseUpdateOneRequiredWithoutPrerequisiteForNestedInput
  }

  export type CoursePrerequisiteUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    prerequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePrerequisiteCreateManyInput = {
    courseId: string
    prerequisiteId: string
  }

  export type CoursePrerequisiteUpdateManyMutationInput = {

  }

  export type CoursePrerequisiteUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    prerequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    course: CourseCreateNestedOneWithoutSectionsInput
    instructor: InstructorCreateNestedOneWithoutSectionsInput
    registrations?: RegistrationCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    courseId: string
    instructorId: string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
    instructor?: InstructorUpdateOneRequiredWithoutSectionsNestedInput
    registrations?: RegistrationUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    courseId?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    registrations?: RegistrationUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    courseId: string
    instructorId: string
  }

  export type SectionUpdateManyMutationInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
  }

  export type SectionUncheckedUpdateManyInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    courseId?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationCreateInput = {
    id?: string
    grade: string
    section: SectionCreateNestedOneWithoutRegistrationsInput
    student: StudentCreateNestedOneWithoutRegistrationsInput
    course: CourseCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: string
    sectionId: string
    studentId: string
    courseId: string
    grade: string
  }

  export type RegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    section?: SectionUpdateOneRequiredWithoutRegistrationsNestedInput
    student?: StudentUpdateOneRequiredWithoutRegistrationsNestedInput
    course?: CourseUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationCreateManyInput = {
    id?: string
    sectionId: string
    studentId: string
    courseId: string
    grade: string
  }

  export type RegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type InstructorNullableScalarRelationFilter = {
    is?: InstructorWhereInput | null
    isNot?: InstructorWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminCountOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MajorScalarRelationFilter = {
    is?: MajorWhereInput
    isNot?: MajorWhereInput
  }

  export type RegistrationListRelationFilter = {
    every?: RegistrationWhereInput
    some?: RegistrationWhereInput
    none?: RegistrationWhereInput
  }

  export type RegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    userId?: SortOrder
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
    majorId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    userId?: SortOrder
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
    majorId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    userId?: SortOrder
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
    majorId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    gpa?: SortOrder
    finishedCreditHour?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    userId?: SortOrder
    majorId?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    userId?: SortOrder
    majorId?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    userId?: SortOrder
    majorId?: SortOrder
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type InstructorListRelationFilter = {
    every?: InstructorWhereInput
    some?: InstructorWhereInput
    none?: InstructorWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorCountOrderByAggregateInput = {
    majorId?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
    totalCreditHour?: SortOrder
  }

  export type MajorAvgOrderByAggregateInput = {
    totalCreditHour?: SortOrder
  }

  export type MajorMaxOrderByAggregateInput = {
    majorId?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
    totalCreditHour?: SortOrder
  }

  export type MajorMinOrderByAggregateInput = {
    majorId?: SortOrder
    majorCode?: SortOrder
    majorName?: SortOrder
    totalCreditHour?: SortOrder
  }

  export type MajorSumOrderByAggregateInput = {
    totalCreditHour?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CoursePrerequisiteListRelationFilter = {
    every?: CoursePrerequisiteWhereInput
    some?: CoursePrerequisiteWhereInput
    none?: CoursePrerequisiteWhereInput
  }

  export type CoursePrerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseCode?: SortOrder
    creditHour?: SortOrder
    courseName?: SortOrder
    isOngoing?: SortOrder
    isRegistration?: SortOrder
    majorId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    creditHour?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseCode?: SortOrder
    creditHour?: SortOrder
    courseName?: SortOrder
    isOngoing?: SortOrder
    isRegistration?: SortOrder
    majorId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseCode?: SortOrder
    creditHour?: SortOrder
    courseName?: SortOrder
    isOngoing?: SortOrder
    isRegistration?: SortOrder
    majorId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    creditHour?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CoursePrerequisiteCourseIdPrerequisiteIdCompoundUniqueInput = {
    courseId: string
    prerequisiteId: string
  }

  export type CoursePrerequisiteCountOrderByAggregateInput = {
    courseId?: SortOrder
    prerequisiteId?: SortOrder
  }

  export type CoursePrerequisiteMaxOrderByAggregateInput = {
    courseId?: SortOrder
    prerequisiteId?: SortOrder
  }

  export type CoursePrerequisiteMinOrderByAggregateInput = {
    courseId?: SortOrder
    prerequisiteId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type EnumSectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionStatus | EnumSectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SectionStatus[]
    notIn?: $Enums.SectionStatus[]
    not?: NestedEnumSectionStatusFilter<$PrismaModel> | $Enums.SectionStatus
  }

  export type InstructorScalarRelationFilter = {
    is?: InstructorWhereInput
    isNot?: InstructorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SectionCountOrderByAggregateInput = {
    sectionId?: SortOrder
    currentSeats?: SortOrder
    totalSeats?: SortOrder
    semester?: SortOrder
    days?: SortOrder
    time?: SortOrder
    location?: SortOrder
    approvalStatus?: SortOrder
    sectionStatus?: SortOrder
    courseId?: SortOrder
    instructorId?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    currentSeats?: SortOrder
    totalSeats?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    sectionId?: SortOrder
    currentSeats?: SortOrder
    totalSeats?: SortOrder
    semester?: SortOrder
    days?: SortOrder
    time?: SortOrder
    location?: SortOrder
    approvalStatus?: SortOrder
    sectionStatus?: SortOrder
    courseId?: SortOrder
    instructorId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    sectionId?: SortOrder
    currentSeats?: SortOrder
    totalSeats?: SortOrder
    semester?: SortOrder
    days?: SortOrder
    time?: SortOrder
    location?: SortOrder
    approvalStatus?: SortOrder
    sectionStatus?: SortOrder
    courseId?: SortOrder
    instructorId?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    currentSeats?: SortOrder
    totalSeats?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type EnumSectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionStatus | EnumSectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SectionStatus[]
    notIn?: $Enums.SectionStatus[]
    not?: NestedEnumSectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionStatusFilter<$PrismaModel>
    _max?: NestedEnumSectionStatusFilter<$PrismaModel>
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type RegistrationSectionIdStudentIdCompoundUniqueInput = {
    sectionId: string
    studentId: string
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InstructorCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    connect?: InstructorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InstructorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    connect?: InstructorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolesFieldUpdateOperationsInput = {
    set?: $Enums.Roles
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InstructorUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    upsert?: InstructorUpsertWithoutUserInput
    disconnect?: InstructorWhereInput | boolean
    delete?: InstructorWhereInput | boolean
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutUserInput, InstructorUpdateWithoutUserInput>, InstructorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InstructorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    upsert?: InstructorUpsertWithoutUserInput
    disconnect?: InstructorWhereInput | boolean
    delete?: InstructorWhereInput | boolean
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutUserInput, InstructorUpdateWithoutUserInput>, InstructorUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type MajorCreateNestedOneWithoutStudentsInput = {
    create?: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutStudentsInput
    connect?: MajorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type RegistrationCreateNestedManyWithoutStudentInput = {
    create?: XOR<RegistrationCreateWithoutStudentInput, RegistrationUncheckedCreateWithoutStudentInput> | RegistrationCreateWithoutStudentInput[] | RegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutStudentInput | RegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: RegistrationCreateManyStudentInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<RegistrationCreateWithoutStudentInput, RegistrationUncheckedCreateWithoutStudentInput> | RegistrationCreateWithoutStudentInput[] | RegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutStudentInput | RegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: RegistrationCreateManyStudentInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MajorUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutStudentsInput
    upsert?: MajorUpsertWithoutStudentsInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutStudentsInput, MajorUpdateWithoutStudentsInput>, MajorUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type RegistrationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RegistrationCreateWithoutStudentInput, RegistrationUncheckedCreateWithoutStudentInput> | RegistrationCreateWithoutStudentInput[] | RegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutStudentInput | RegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutStudentInput | RegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RegistrationCreateManyStudentInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutStudentInput | RegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutStudentInput | RegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RegistrationCreateWithoutStudentInput, RegistrationUncheckedCreateWithoutStudentInput> | RegistrationCreateWithoutStudentInput[] | RegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutStudentInput | RegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutStudentInput | RegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RegistrationCreateManyStudentInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutStudentInput | RegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutStudentInput | RegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInstructorInput = {
    create?: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorInput
    connect?: UserWhereUniqueInput
  }

  export type MajorCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<MajorCreateWithoutInstructorsInput, MajorUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutInstructorsInput
    connect?: MajorWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutInstructorInput = {
    create?: XOR<SectionCreateWithoutInstructorInput, SectionUncheckedCreateWithoutInstructorInput> | SectionCreateWithoutInstructorInput[] | SectionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutInstructorInput | SectionCreateOrConnectWithoutInstructorInput[]
    createMany?: SectionCreateManyInstructorInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<SectionCreateWithoutInstructorInput, SectionUncheckedCreateWithoutInstructorInput> | SectionCreateWithoutInstructorInput[] | SectionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutInstructorInput | SectionCreateOrConnectWithoutInstructorInput[]
    createMany?: SectionCreateManyInstructorInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInstructorNestedInput = {
    create?: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorInput
    upsert?: UserUpsertWithoutInstructorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructorInput, UserUpdateWithoutInstructorInput>, UserUncheckedUpdateWithoutInstructorInput>
  }

  export type MajorUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: XOR<MajorCreateWithoutInstructorsInput, MajorUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutInstructorsInput
    upsert?: MajorUpsertWithoutInstructorsInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutInstructorsInput, MajorUpdateWithoutInstructorsInput>, MajorUncheckedUpdateWithoutInstructorsInput>
  }

  export type SectionUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<SectionCreateWithoutInstructorInput, SectionUncheckedCreateWithoutInstructorInput> | SectionCreateWithoutInstructorInput[] | SectionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutInstructorInput | SectionCreateOrConnectWithoutInstructorInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutInstructorInput | SectionUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: SectionCreateManyInstructorInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutInstructorInput | SectionUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutInstructorInput | SectionUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<SectionCreateWithoutInstructorInput, SectionUncheckedCreateWithoutInstructorInput> | SectionCreateWithoutInstructorInput[] | SectionUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutInstructorInput | SectionCreateOrConnectWithoutInstructorInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutInstructorInput | SectionUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: SectionCreateManyInstructorInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutInstructorInput | SectionUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutInstructorInput | SectionUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutMajorInput = {
    create?: XOR<StudentCreateWithoutMajorInput, StudentUncheckedCreateWithoutMajorInput> | StudentCreateWithoutMajorInput[] | StudentUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorInput | StudentCreateOrConnectWithoutMajorInput[]
    createMany?: StudentCreateManyMajorInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type InstructorCreateNestedManyWithoutMajorInput = {
    create?: XOR<InstructorCreateWithoutMajorInput, InstructorUncheckedCreateWithoutMajorInput> | InstructorCreateWithoutMajorInput[] | InstructorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutMajorInput | InstructorCreateOrConnectWithoutMajorInput[]
    createMany?: InstructorCreateManyMajorInputEnvelope
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutMajorInput = {
    create?: XOR<CourseCreateWithoutMajorInput, CourseUncheckedCreateWithoutMajorInput> | CourseCreateWithoutMajorInput[] | CourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorInput | CourseCreateOrConnectWithoutMajorInput[]
    createMany?: CourseCreateManyMajorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<StudentCreateWithoutMajorInput, StudentUncheckedCreateWithoutMajorInput> | StudentCreateWithoutMajorInput[] | StudentUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorInput | StudentCreateOrConnectWithoutMajorInput[]
    createMany?: StudentCreateManyMajorInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type InstructorUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<InstructorCreateWithoutMajorInput, InstructorUncheckedCreateWithoutMajorInput> | InstructorCreateWithoutMajorInput[] | InstructorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutMajorInput | InstructorCreateOrConnectWithoutMajorInput[]
    createMany?: InstructorCreateManyMajorInputEnvelope
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<CourseCreateWithoutMajorInput, CourseUncheckedCreateWithoutMajorInput> | CourseCreateWithoutMajorInput[] | CourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorInput | CourseCreateOrConnectWithoutMajorInput[]
    createMany?: CourseCreateManyMajorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutMajorNestedInput = {
    create?: XOR<StudentCreateWithoutMajorInput, StudentUncheckedCreateWithoutMajorInput> | StudentCreateWithoutMajorInput[] | StudentUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorInput | StudentCreateOrConnectWithoutMajorInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMajorInput | StudentUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: StudentCreateManyMajorInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMajorInput | StudentUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMajorInput | StudentUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type InstructorUpdateManyWithoutMajorNestedInput = {
    create?: XOR<InstructorCreateWithoutMajorInput, InstructorUncheckedCreateWithoutMajorInput> | InstructorCreateWithoutMajorInput[] | InstructorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutMajorInput | InstructorCreateOrConnectWithoutMajorInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutMajorInput | InstructorUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: InstructorCreateManyMajorInputEnvelope
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutMajorInput | InstructorUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutMajorInput | InstructorUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutMajorNestedInput = {
    create?: XOR<CourseCreateWithoutMajorInput, CourseUncheckedCreateWithoutMajorInput> | CourseCreateWithoutMajorInput[] | CourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorInput | CourseCreateOrConnectWithoutMajorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutMajorInput | CourseUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: CourseCreateManyMajorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutMajorInput | CourseUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutMajorInput | CourseUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<StudentCreateWithoutMajorInput, StudentUncheckedCreateWithoutMajorInput> | StudentCreateWithoutMajorInput[] | StudentUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorInput | StudentCreateOrConnectWithoutMajorInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMajorInput | StudentUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: StudentCreateManyMajorInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMajorInput | StudentUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMajorInput | StudentUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type InstructorUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<InstructorCreateWithoutMajorInput, InstructorUncheckedCreateWithoutMajorInput> | InstructorCreateWithoutMajorInput[] | InstructorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutMajorInput | InstructorCreateOrConnectWithoutMajorInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutMajorInput | InstructorUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: InstructorCreateManyMajorInputEnvelope
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutMajorInput | InstructorUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutMajorInput | InstructorUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<CourseCreateWithoutMajorInput, CourseUncheckedCreateWithoutMajorInput> | CourseCreateWithoutMajorInput[] | CourseUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorInput | CourseCreateOrConnectWithoutMajorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutMajorInput | CourseUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: CourseCreateManyMajorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutMajorInput | CourseUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutMajorInput | CourseUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type MajorCreateNestedOneWithoutCoursesInput = {
    create?: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: MajorCreateOrConnectWithoutCoursesInput
    connect?: MajorWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type RegistrationCreateNestedManyWithoutCourseInput = {
    create?: XOR<RegistrationCreateWithoutCourseInput, RegistrationUncheckedCreateWithoutCourseInput> | RegistrationCreateWithoutCourseInput[] | RegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutCourseInput | RegistrationCreateOrConnectWithoutCourseInput[]
    createMany?: RegistrationCreateManyCourseInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type CoursePrerequisiteCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutCourseInput, CoursePrerequisiteUncheckedCreateWithoutCourseInput> | CoursePrerequisiteCreateWithoutCourseInput[] | CoursePrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutCourseInput | CoursePrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePrerequisiteCreateManyCourseInputEnvelope
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
  }

  export type CoursePrerequisiteCreateNestedManyWithoutPrerequisiteInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput> | CoursePrerequisiteCreateWithoutPrerequisiteInput[] | CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput | CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    createMany?: CoursePrerequisiteCreateManyPrerequisiteInputEnvelope
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RegistrationCreateWithoutCourseInput, RegistrationUncheckedCreateWithoutCourseInput> | RegistrationCreateWithoutCourseInput[] | RegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutCourseInput | RegistrationCreateOrConnectWithoutCourseInput[]
    createMany?: RegistrationCreateManyCourseInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type CoursePrerequisiteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutCourseInput, CoursePrerequisiteUncheckedCreateWithoutCourseInput> | CoursePrerequisiteCreateWithoutCourseInput[] | CoursePrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutCourseInput | CoursePrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePrerequisiteCreateManyCourseInputEnvelope
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
  }

  export type CoursePrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput> | CoursePrerequisiteCreateWithoutPrerequisiteInput[] | CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput | CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    createMany?: CoursePrerequisiteCreateManyPrerequisiteInputEnvelope
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MajorUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: MajorCreateOrConnectWithoutCoursesInput
    upsert?: MajorUpsertWithoutCoursesInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutCoursesInput, MajorUpdateWithoutCoursesInput>, MajorUncheckedUpdateWithoutCoursesInput>
  }

  export type SectionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type RegistrationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RegistrationCreateWithoutCourseInput, RegistrationUncheckedCreateWithoutCourseInput> | RegistrationCreateWithoutCourseInput[] | RegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutCourseInput | RegistrationCreateOrConnectWithoutCourseInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutCourseInput | RegistrationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RegistrationCreateManyCourseInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutCourseInput | RegistrationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutCourseInput | RegistrationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type CoursePrerequisiteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutCourseInput, CoursePrerequisiteUncheckedCreateWithoutCourseInput> | CoursePrerequisiteCreateWithoutCourseInput[] | CoursePrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutCourseInput | CoursePrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePrerequisiteUpsertWithWhereUniqueWithoutCourseInput | CoursePrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePrerequisiteCreateManyCourseInputEnvelope
    set?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    disconnect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    delete?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    update?: CoursePrerequisiteUpdateWithWhereUniqueWithoutCourseInput | CoursePrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePrerequisiteUpdateManyWithWhereWithoutCourseInput | CoursePrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePrerequisiteScalarWhereInput | CoursePrerequisiteScalarWhereInput[]
  }

  export type CoursePrerequisiteUpdateManyWithoutPrerequisiteNestedInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput> | CoursePrerequisiteCreateWithoutPrerequisiteInput[] | CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput | CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    upsert?: CoursePrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput | CoursePrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput[]
    createMany?: CoursePrerequisiteCreateManyPrerequisiteInputEnvelope
    set?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    disconnect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    delete?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    update?: CoursePrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput | CoursePrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput[]
    updateMany?: CoursePrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput | CoursePrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput[]
    deleteMany?: CoursePrerequisiteScalarWhereInput | CoursePrerequisiteScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RegistrationCreateWithoutCourseInput, RegistrationUncheckedCreateWithoutCourseInput> | RegistrationCreateWithoutCourseInput[] | RegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutCourseInput | RegistrationCreateOrConnectWithoutCourseInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutCourseInput | RegistrationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RegistrationCreateManyCourseInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutCourseInput | RegistrationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutCourseInput | RegistrationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type CoursePrerequisiteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutCourseInput, CoursePrerequisiteUncheckedCreateWithoutCourseInput> | CoursePrerequisiteCreateWithoutCourseInput[] | CoursePrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutCourseInput | CoursePrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePrerequisiteUpsertWithWhereUniqueWithoutCourseInput | CoursePrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePrerequisiteCreateManyCourseInputEnvelope
    set?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    disconnect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    delete?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    update?: CoursePrerequisiteUpdateWithWhereUniqueWithoutCourseInput | CoursePrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePrerequisiteUpdateManyWithWhereWithoutCourseInput | CoursePrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePrerequisiteScalarWhereInput | CoursePrerequisiteScalarWhereInput[]
  }

  export type CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput = {
    create?: XOR<CoursePrerequisiteCreateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput> | CoursePrerequisiteCreateWithoutPrerequisiteInput[] | CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput[]
    connectOrCreate?: CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput | CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput[]
    upsert?: CoursePrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput | CoursePrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput[]
    createMany?: CoursePrerequisiteCreateManyPrerequisiteInputEnvelope
    set?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    disconnect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    delete?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    connect?: CoursePrerequisiteWhereUniqueInput | CoursePrerequisiteWhereUniqueInput[]
    update?: CoursePrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput | CoursePrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput[]
    updateMany?: CoursePrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput | CoursePrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput[]
    deleteMany?: CoursePrerequisiteScalarWhereInput | CoursePrerequisiteScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutPrerequisiteForInput = {
    create?: XOR<CourseCreateWithoutPrerequisiteForInput, CourseUncheckedCreateWithoutPrerequisiteForInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisiteForInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    upsert?: CourseUpsertWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPrerequisitesInput, CourseUpdateWithoutPrerequisitesInput>, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateOneRequiredWithoutPrerequisiteForNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisiteForInput, CourseUncheckedCreateWithoutPrerequisiteForInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisiteForInput
    upsert?: CourseUpsertWithoutPrerequisiteForInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPrerequisiteForInput, CourseUpdateWithoutPrerequisiteForInput>, CourseUncheckedUpdateWithoutPrerequisiteForInput>
  }

  export type CourseCreateNestedOneWithoutSectionsInput = {
    create?: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput
    connect?: CourseWhereUniqueInput
  }

  export type InstructorCreateNestedOneWithoutSectionsInput = {
    create?: XOR<InstructorCreateWithoutSectionsInput, InstructorUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutSectionsInput
    connect?: InstructorWhereUniqueInput
  }

  export type RegistrationCreateNestedManyWithoutSectionInput = {
    create?: XOR<RegistrationCreateWithoutSectionInput, RegistrationUncheckedCreateWithoutSectionInput> | RegistrationCreateWithoutSectionInput[] | RegistrationUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutSectionInput | RegistrationCreateOrConnectWithoutSectionInput[]
    createMany?: RegistrationCreateManySectionInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<RegistrationCreateWithoutSectionInput, RegistrationUncheckedCreateWithoutSectionInput> | RegistrationCreateWithoutSectionInput[] | RegistrationUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutSectionInput | RegistrationCreateOrConnectWithoutSectionInput[]
    createMany?: RegistrationCreateManySectionInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type EnumSectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SectionStatus
  }

  export type CourseUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput
    upsert?: CourseUpsertWithoutSectionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSectionsInput, CourseUpdateWithoutSectionsInput>, CourseUncheckedUpdateWithoutSectionsInput>
  }

  export type InstructorUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<InstructorCreateWithoutSectionsInput, InstructorUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutSectionsInput
    upsert?: InstructorUpsertWithoutSectionsInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutSectionsInput, InstructorUpdateWithoutSectionsInput>, InstructorUncheckedUpdateWithoutSectionsInput>
  }

  export type RegistrationUpdateManyWithoutSectionNestedInput = {
    create?: XOR<RegistrationCreateWithoutSectionInput, RegistrationUncheckedCreateWithoutSectionInput> | RegistrationCreateWithoutSectionInput[] | RegistrationUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutSectionInput | RegistrationCreateOrConnectWithoutSectionInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutSectionInput | RegistrationUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: RegistrationCreateManySectionInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutSectionInput | RegistrationUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutSectionInput | RegistrationUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<RegistrationCreateWithoutSectionInput, RegistrationUncheckedCreateWithoutSectionInput> | RegistrationCreateWithoutSectionInput[] | RegistrationUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutSectionInput | RegistrationCreateOrConnectWithoutSectionInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutSectionInput | RegistrationUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: RegistrationCreateManySectionInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutSectionInput | RegistrationUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutSectionInput | RegistrationUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<SectionCreateWithoutRegistrationsInput, SectionUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutRegistrationsInput
    connect?: SectionWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRegistrationsInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<CourseCreateWithoutRegistrationsInput, CourseUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRegistrationsInput
    connect?: CourseWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<SectionCreateWithoutRegistrationsInput, SectionUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutRegistrationsInput
    upsert?: SectionUpsertWithoutRegistrationsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutRegistrationsInput, SectionUpdateWithoutRegistrationsInput>, SectionUncheckedUpdateWithoutRegistrationsInput>
  }

  export type StudentUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRegistrationsInput
    upsert?: StudentUpsertWithoutRegistrationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutRegistrationsInput, StudentUpdateWithoutRegistrationsInput>, StudentUncheckedUpdateWithoutRegistrationsInput>
  }

  export type CourseUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<CourseCreateWithoutRegistrationsInput, CourseUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRegistrationsInput
    upsert?: CourseUpsertWithoutRegistrationsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRegistrationsInput, CourseUpdateWithoutRegistrationsInput>, CourseUncheckedUpdateWithoutRegistrationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesFilter<$PrismaModel> | $Enums.Roles
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Roles | EnumRolesFieldRefInput<$PrismaModel>
    in?: $Enums.Roles[]
    notIn?: $Enums.Roles[]
    not?: NestedEnumRolesWithAggregatesFilter<$PrismaModel> | $Enums.Roles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolesFilter<$PrismaModel>
    _max?: NestedEnumRolesFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type NestedEnumSectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionStatus | EnumSectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SectionStatus[]
    notIn?: $Enums.SectionStatus[]
    not?: NestedEnumSectionStatusFilter<$PrismaModel> | $Enums.SectionStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[]
    notIn?: $Enums.ApprovalStatus[]
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type NestedEnumSectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionStatus | EnumSectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SectionStatus[]
    notIn?: $Enums.SectionStatus[]
    not?: NestedEnumSectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionStatusFilter<$PrismaModel>
    _max?: NestedEnumSectionStatusFilter<$PrismaModel>
  }

  export type AdminCreateWithoutUserInput = {

  }

  export type AdminUncheckedCreateWithoutUserInput = {

  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateWithoutUserInput = {
    gpa: number
    finishedCreditHour: number
    major: MajorCreateNestedOneWithoutStudentsInput
    registrations?: RegistrationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    gpa: number
    finishedCreditHour: number
    majorId: string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type InstructorCreateWithoutUserInput = {
    major: MajorCreateNestedOneWithoutInstructorsInput
    sections?: SectionCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutUserInput = {
    majorId: string
    sections?: SectionUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutUserInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {

  }

  export type AdminUncheckedUpdateWithoutUserInput = {

  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    major?: MajorUpdateOneRequiredWithoutStudentsNestedInput
    registrations?: RegistrationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    majorId?: StringFieldUpdateOperationsInput | string
    registrations?: RegistrationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InstructorUpsertWithoutUserInput = {
    update: XOR<InstructorUpdateWithoutUserInput, InstructorUncheckedUpdateWithoutUserInput>
    create: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutUserInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutUserInput, InstructorUncheckedUpdateWithoutUserInput>
  }

  export type InstructorUpdateWithoutUserInput = {
    major?: MajorUpdateOneRequiredWithoutInstructorsNestedInput
    sections?: SectionUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutUserInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Student?: StudentCreateNestedOneWithoutUserInput
    Instructor?: InstructorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Instructor?: InstructorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Student?: StudentUpdateOneWithoutUserNestedInput
    Instructor?: InstructorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Instructor?: InstructorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MajorCreateWithoutStudentsInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    instructors?: InstructorCreateNestedManyWithoutMajorInput
    courses?: CourseCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutStudentsInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    instructors?: InstructorUncheckedCreateNestedManyWithoutMajorInput
    courses?: CourseUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutStudentsInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutStudentInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Admin?: AdminCreateNestedOneWithoutUserInput
    Instructor?: InstructorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    Instructor?: InstructorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type RegistrationCreateWithoutStudentInput = {
    id?: string
    grade: string
    section: SectionCreateNestedOneWithoutRegistrationsInput
    course: CourseCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutStudentInput = {
    id?: string
    sectionId: string
    courseId: string
    grade: string
  }

  export type RegistrationCreateOrConnectWithoutStudentInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutStudentInput, RegistrationUncheckedCreateWithoutStudentInput>
  }

  export type RegistrationCreateManyStudentInputEnvelope = {
    data: RegistrationCreateManyStudentInput | RegistrationCreateManyStudentInput[]
  }

  export type MajorUpsertWithoutStudentsInput = {
    update: XOR<MajorUpdateWithoutStudentsInput, MajorUncheckedUpdateWithoutStudentsInput>
    create: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutStudentsInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutStudentsInput, MajorUncheckedUpdateWithoutStudentsInput>
  }

  export type MajorUpdateWithoutStudentsInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    instructors?: InstructorUpdateManyWithoutMajorNestedInput
    courses?: CourseUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutStudentsInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    instructors?: InstructorUncheckedUpdateManyWithoutMajorNestedInput
    courses?: CourseUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Admin?: AdminUpdateOneWithoutUserNestedInput
    Instructor?: InstructorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    Instructor?: InstructorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RegistrationUpsertWithWhereUniqueWithoutStudentInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutStudentInput, RegistrationUncheckedUpdateWithoutStudentInput>
    create: XOR<RegistrationCreateWithoutStudentInput, RegistrationUncheckedCreateWithoutStudentInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutStudentInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutStudentInput, RegistrationUncheckedUpdateWithoutStudentInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutStudentInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutStudentInput>
  }

  export type RegistrationScalarWhereInput = {
    AND?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    OR?: RegistrationScalarWhereInput[]
    NOT?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    id?: StringFilter<"Registration"> | string
    sectionId?: StringFilter<"Registration"> | string
    studentId?: StringFilter<"Registration"> | string
    courseId?: StringFilter<"Registration"> | string
    grade?: StringFilter<"Registration"> | string
  }

  export type UserCreateWithoutInstructorInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Admin?: AdminCreateNestedOneWithoutUserInput
    Student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstructorInput = {
    userId?: string
    firstName: string
    lastName: string
    username: string
    password: string
    role?: $Enums.Roles
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstructorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
  }

  export type MajorCreateWithoutInstructorsInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    students?: StudentCreateNestedManyWithoutMajorInput
    courses?: CourseCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutInstructorsInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    students?: StudentUncheckedCreateNestedManyWithoutMajorInput
    courses?: CourseUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutInstructorsInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutInstructorsInput, MajorUncheckedCreateWithoutInstructorsInput>
  }

  export type SectionCreateWithoutInstructorInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    course: CourseCreateNestedOneWithoutSectionsInput
    registrations?: RegistrationCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutInstructorInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    courseId: string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutInstructorInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutInstructorInput, SectionUncheckedCreateWithoutInstructorInput>
  }

  export type SectionCreateManyInstructorInputEnvelope = {
    data: SectionCreateManyInstructorInput | SectionCreateManyInstructorInput[]
  }

  export type UserUpsertWithoutInstructorInput = {
    update: XOR<UserUpdateWithoutInstructorInput, UserUncheckedUpdateWithoutInstructorInput>
    create: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructorInput, UserUncheckedUpdateWithoutInstructorInput>
  }

  export type UserUpdateWithoutInstructorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Admin?: AdminUpdateOneWithoutUserNestedInput
    Student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRolesFieldUpdateOperationsInput | $Enums.Roles
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MajorUpsertWithoutInstructorsInput = {
    update: XOR<MajorUpdateWithoutInstructorsInput, MajorUncheckedUpdateWithoutInstructorsInput>
    create: XOR<MajorCreateWithoutInstructorsInput, MajorUncheckedCreateWithoutInstructorsInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutInstructorsInput, MajorUncheckedUpdateWithoutInstructorsInput>
  }

  export type MajorUpdateWithoutInstructorsInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    students?: StudentUpdateManyWithoutMajorNestedInput
    courses?: CourseUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutInstructorsInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutMajorNestedInput
    courses?: CourseUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type SectionUpsertWithWhereUniqueWithoutInstructorInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutInstructorInput, SectionUncheckedUpdateWithoutInstructorInput>
    create: XOR<SectionCreateWithoutInstructorInput, SectionUncheckedCreateWithoutInstructorInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutInstructorInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutInstructorInput, SectionUncheckedUpdateWithoutInstructorInput>
  }

  export type SectionUpdateManyWithWhereWithoutInstructorInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutInstructorInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    sectionId?: StringFilter<"Section"> | string
    currentSeats?: IntFilter<"Section"> | number
    totalSeats?: IntFilter<"Section"> | number
    semester?: StringFilter<"Section"> | string
    days?: StringNullableFilter<"Section"> | string | null
    time?: StringNullableFilter<"Section"> | string | null
    location?: StringNullableFilter<"Section"> | string | null
    approvalStatus?: EnumApprovalStatusFilter<"Section"> | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFilter<"Section"> | $Enums.SectionStatus
    courseId?: StringFilter<"Section"> | string
    instructorId?: StringFilter<"Section"> | string
  }

  export type StudentCreateWithoutMajorInput = {
    gpa: number
    finishedCreditHour: number
    user: UserCreateNestedOneWithoutStudentInput
    registrations?: RegistrationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMajorInput = {
    userId: string
    gpa: number
    finishedCreditHour: number
    registrations?: RegistrationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMajorInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMajorInput, StudentUncheckedCreateWithoutMajorInput>
  }

  export type StudentCreateManyMajorInputEnvelope = {
    data: StudentCreateManyMajorInput | StudentCreateManyMajorInput[]
  }

  export type InstructorCreateWithoutMajorInput = {
    user: UserCreateNestedOneWithoutInstructorInput
    sections?: SectionCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutMajorInput = {
    userId: string
    sections?: SectionUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorCreateOrConnectWithoutMajorInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutMajorInput, InstructorUncheckedCreateWithoutMajorInput>
  }

  export type InstructorCreateManyMajorInputEnvelope = {
    data: InstructorCreateManyMajorInput | InstructorCreateManyMajorInput[]
  }

  export type CourseCreateWithoutMajorInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    sections?: SectionCreateNestedManyWithoutCourseInput
    registrations?: RegistrationCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseUncheckedCreateWithoutMajorInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseCreateOrConnectWithoutMajorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutMajorInput, CourseUncheckedCreateWithoutMajorInput>
  }

  export type CourseCreateManyMajorInputEnvelope = {
    data: CourseCreateManyMajorInput | CourseCreateManyMajorInput[]
  }

  export type StudentUpsertWithWhereUniqueWithoutMajorInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutMajorInput, StudentUncheckedUpdateWithoutMajorInput>
    create: XOR<StudentCreateWithoutMajorInput, StudentUncheckedCreateWithoutMajorInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutMajorInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutMajorInput, StudentUncheckedUpdateWithoutMajorInput>
  }

  export type StudentUpdateManyWithWhereWithoutMajorInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutMajorInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    userId?: StringFilter<"Student"> | string
    gpa?: FloatFilter<"Student"> | number
    finishedCreditHour?: IntFilter<"Student"> | number
    majorId?: StringFilter<"Student"> | string
  }

  export type InstructorUpsertWithWhereUniqueWithoutMajorInput = {
    where: InstructorWhereUniqueInput
    update: XOR<InstructorUpdateWithoutMajorInput, InstructorUncheckedUpdateWithoutMajorInput>
    create: XOR<InstructorCreateWithoutMajorInput, InstructorUncheckedCreateWithoutMajorInput>
  }

  export type InstructorUpdateWithWhereUniqueWithoutMajorInput = {
    where: InstructorWhereUniqueInput
    data: XOR<InstructorUpdateWithoutMajorInput, InstructorUncheckedUpdateWithoutMajorInput>
  }

  export type InstructorUpdateManyWithWhereWithoutMajorInput = {
    where: InstructorScalarWhereInput
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyWithoutMajorInput>
  }

  export type InstructorScalarWhereInput = {
    AND?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
    OR?: InstructorScalarWhereInput[]
    NOT?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
    userId?: StringFilter<"Instructor"> | string
    majorId?: StringFilter<"Instructor"> | string
  }

  export type CourseUpsertWithWhereUniqueWithoutMajorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutMajorInput, CourseUncheckedUpdateWithoutMajorInput>
    create: XOR<CourseCreateWithoutMajorInput, CourseUncheckedCreateWithoutMajorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutMajorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutMajorInput, CourseUncheckedUpdateWithoutMajorInput>
  }

  export type CourseUpdateManyWithWhereWithoutMajorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutMajorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    courseCode?: StringFilter<"Course"> | string
    creditHour?: IntFilter<"Course"> | number
    courseName?: StringFilter<"Course"> | string
    isOngoing?: BoolFilter<"Course"> | boolean
    isRegistration?: BoolFilter<"Course"> | boolean
    majorId?: StringFilter<"Course"> | string
  }

  export type MajorCreateWithoutCoursesInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    students?: StudentCreateNestedManyWithoutMajorInput
    instructors?: InstructorCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutCoursesInput = {
    majorId?: string
    majorCode: string
    majorName: string
    totalCreditHour: number
    students?: StudentUncheckedCreateNestedManyWithoutMajorInput
    instructors?: InstructorUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutCoursesInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
  }

  export type SectionCreateWithoutCourseInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    instructor: InstructorCreateNestedOneWithoutSectionsInput
    registrations?: RegistrationCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCourseInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    instructorId: string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCourseInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionCreateManyCourseInputEnvelope = {
    data: SectionCreateManyCourseInput | SectionCreateManyCourseInput[]
  }

  export type RegistrationCreateWithoutCourseInput = {
    id?: string
    grade: string
    section: SectionCreateNestedOneWithoutRegistrationsInput
    student: StudentCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutCourseInput = {
    id?: string
    sectionId: string
    studentId: string
    grade: string
  }

  export type RegistrationCreateOrConnectWithoutCourseInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutCourseInput, RegistrationUncheckedCreateWithoutCourseInput>
  }

  export type RegistrationCreateManyCourseInputEnvelope = {
    data: RegistrationCreateManyCourseInput | RegistrationCreateManyCourseInput[]
  }

  export type CoursePrerequisiteCreateWithoutCourseInput = {
    prerequisite: CourseCreateNestedOneWithoutPrerequisiteForInput
  }

  export type CoursePrerequisiteUncheckedCreateWithoutCourseInput = {
    prerequisiteId: string
  }

  export type CoursePrerequisiteCreateOrConnectWithoutCourseInput = {
    where: CoursePrerequisiteWhereUniqueInput
    create: XOR<CoursePrerequisiteCreateWithoutCourseInput, CoursePrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type CoursePrerequisiteCreateManyCourseInputEnvelope = {
    data: CoursePrerequisiteCreateManyCourseInput | CoursePrerequisiteCreateManyCourseInput[]
  }

  export type CoursePrerequisiteCreateWithoutPrerequisiteInput = {
    course: CourseCreateNestedOneWithoutPrerequisitesInput
  }

  export type CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput = {
    courseId: string
  }

  export type CoursePrerequisiteCreateOrConnectWithoutPrerequisiteInput = {
    where: CoursePrerequisiteWhereUniqueInput
    create: XOR<CoursePrerequisiteCreateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput>
  }

  export type CoursePrerequisiteCreateManyPrerequisiteInputEnvelope = {
    data: CoursePrerequisiteCreateManyPrerequisiteInput | CoursePrerequisiteCreateManyPrerequisiteInput[]
  }

  export type MajorUpsertWithoutCoursesInput = {
    update: XOR<MajorUpdateWithoutCoursesInput, MajorUncheckedUpdateWithoutCoursesInput>
    create: XOR<MajorCreateWithoutCoursesInput, MajorUncheckedCreateWithoutCoursesInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutCoursesInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutCoursesInput, MajorUncheckedUpdateWithoutCoursesInput>
  }

  export type MajorUpdateWithoutCoursesInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    students?: StudentUpdateManyWithoutMajorNestedInput
    instructors?: InstructorUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutCoursesInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorCode?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    totalCreditHour?: IntFieldUpdateOperationsInput | number
    students?: StudentUncheckedUpdateManyWithoutMajorNestedInput
    instructors?: InstructorUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type SectionUpsertWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
  }

  export type SectionUpdateManyWithWhereWithoutCourseInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCourseInput>
  }

  export type RegistrationUpsertWithWhereUniqueWithoutCourseInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutCourseInput, RegistrationUncheckedUpdateWithoutCourseInput>
    create: XOR<RegistrationCreateWithoutCourseInput, RegistrationUncheckedCreateWithoutCourseInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutCourseInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutCourseInput, RegistrationUncheckedUpdateWithoutCourseInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutCourseInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutCourseInput>
  }

  export type CoursePrerequisiteUpsertWithWhereUniqueWithoutCourseInput = {
    where: CoursePrerequisiteWhereUniqueInput
    update: XOR<CoursePrerequisiteUpdateWithoutCourseInput, CoursePrerequisiteUncheckedUpdateWithoutCourseInput>
    create: XOR<CoursePrerequisiteCreateWithoutCourseInput, CoursePrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type CoursePrerequisiteUpdateWithWhereUniqueWithoutCourseInput = {
    where: CoursePrerequisiteWhereUniqueInput
    data: XOR<CoursePrerequisiteUpdateWithoutCourseInput, CoursePrerequisiteUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePrerequisiteUpdateManyWithWhereWithoutCourseInput = {
    where: CoursePrerequisiteScalarWhereInput
    data: XOR<CoursePrerequisiteUpdateManyMutationInput, CoursePrerequisiteUncheckedUpdateManyWithoutCourseInput>
  }

  export type CoursePrerequisiteScalarWhereInput = {
    AND?: CoursePrerequisiteScalarWhereInput | CoursePrerequisiteScalarWhereInput[]
    OR?: CoursePrerequisiteScalarWhereInput[]
    NOT?: CoursePrerequisiteScalarWhereInput | CoursePrerequisiteScalarWhereInput[]
    courseId?: StringFilter<"CoursePrerequisite"> | string
    prerequisiteId?: StringFilter<"CoursePrerequisite"> | string
  }

  export type CoursePrerequisiteUpsertWithWhereUniqueWithoutPrerequisiteInput = {
    where: CoursePrerequisiteWhereUniqueInput
    update: XOR<CoursePrerequisiteUpdateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedUpdateWithoutPrerequisiteInput>
    create: XOR<CoursePrerequisiteCreateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedCreateWithoutPrerequisiteInput>
  }

  export type CoursePrerequisiteUpdateWithWhereUniqueWithoutPrerequisiteInput = {
    where: CoursePrerequisiteWhereUniqueInput
    data: XOR<CoursePrerequisiteUpdateWithoutPrerequisiteInput, CoursePrerequisiteUncheckedUpdateWithoutPrerequisiteInput>
  }

  export type CoursePrerequisiteUpdateManyWithWhereWithoutPrerequisiteInput = {
    where: CoursePrerequisiteScalarWhereInput
    data: XOR<CoursePrerequisiteUpdateManyMutationInput, CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteInput>
  }

  export type CourseCreateWithoutPrerequisitesInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    major: MajorCreateNestedOneWithoutCoursesInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    registrations?: RegistrationCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseUncheckedCreateWithoutPrerequisitesInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseCreateOrConnectWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type CourseCreateWithoutPrerequisiteForInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    major: MajorCreateNestedOneWithoutCoursesInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    registrations?: RegistrationCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPrerequisiteForInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPrerequisiteForInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisiteForInput, CourseUncheckedCreateWithoutPrerequisiteForInput>
  }

  export type CourseUpsertWithoutPrerequisitesInput = {
    update: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPrerequisitesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    majorId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUpsertWithoutPrerequisiteForInput = {
    update: XOR<CourseUpdateWithoutPrerequisiteForInput, CourseUncheckedUpdateWithoutPrerequisiteForInput>
    create: XOR<CourseCreateWithoutPrerequisiteForInput, CourseUncheckedCreateWithoutPrerequisiteForInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPrerequisiteForInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPrerequisiteForInput, CourseUncheckedUpdateWithoutPrerequisiteForInput>
  }

  export type CourseUpdateWithoutPrerequisiteForInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisiteForInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    majorId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutSectionsInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    major: MajorCreateNestedOneWithoutCoursesInput
    registrations?: RegistrationCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseUncheckedCreateWithoutSectionsInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseCreateOrConnectWithoutSectionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
  }

  export type InstructorCreateWithoutSectionsInput = {
    user: UserCreateNestedOneWithoutInstructorInput
    major: MajorCreateNestedOneWithoutInstructorsInput
  }

  export type InstructorUncheckedCreateWithoutSectionsInput = {
    userId: string
    majorId: string
  }

  export type InstructorCreateOrConnectWithoutSectionsInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutSectionsInput, InstructorUncheckedCreateWithoutSectionsInput>
  }

  export type RegistrationCreateWithoutSectionInput = {
    id?: string
    grade: string
    student: StudentCreateNestedOneWithoutRegistrationsInput
    course: CourseCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutSectionInput = {
    id?: string
    studentId: string
    courseId: string
    grade: string
  }

  export type RegistrationCreateOrConnectWithoutSectionInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutSectionInput, RegistrationUncheckedCreateWithoutSectionInput>
  }

  export type RegistrationCreateManySectionInputEnvelope = {
    data: RegistrationCreateManySectionInput | RegistrationCreateManySectionInput[]
  }

  export type CourseUpsertWithoutSectionsInput = {
    update: XOR<CourseUpdateWithoutSectionsInput, CourseUncheckedUpdateWithoutSectionsInput>
    create: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSectionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSectionsInput, CourseUncheckedUpdateWithoutSectionsInput>
  }

  export type CourseUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
    registrations?: RegistrationUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    majorId?: StringFieldUpdateOperationsInput | string
    registrations?: RegistrationUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
  }

  export type InstructorUpsertWithoutSectionsInput = {
    update: XOR<InstructorUpdateWithoutSectionsInput, InstructorUncheckedUpdateWithoutSectionsInput>
    create: XOR<InstructorCreateWithoutSectionsInput, InstructorUncheckedCreateWithoutSectionsInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutSectionsInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutSectionsInput, InstructorUncheckedUpdateWithoutSectionsInput>
  }

  export type InstructorUpdateWithoutSectionsInput = {
    user?: UserUpdateOneRequiredWithoutInstructorNestedInput
    major?: MajorUpdateOneRequiredWithoutInstructorsNestedInput
  }

  export type InstructorUncheckedUpdateWithoutSectionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationUpsertWithWhereUniqueWithoutSectionInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutSectionInput, RegistrationUncheckedUpdateWithoutSectionInput>
    create: XOR<RegistrationCreateWithoutSectionInput, RegistrationUncheckedCreateWithoutSectionInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutSectionInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutSectionInput, RegistrationUncheckedUpdateWithoutSectionInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutSectionInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionCreateWithoutRegistrationsInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    course: CourseCreateNestedOneWithoutSectionsInput
    instructor: InstructorCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutRegistrationsInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    courseId: string
    instructorId: string
  }

  export type SectionCreateOrConnectWithoutRegistrationsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutRegistrationsInput, SectionUncheckedCreateWithoutRegistrationsInput>
  }

  export type StudentCreateWithoutRegistrationsInput = {
    gpa: number
    finishedCreditHour: number
    major: MajorCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRegistrationsInput = {
    userId: string
    gpa: number
    finishedCreditHour: number
    majorId: string
  }

  export type StudentCreateOrConnectWithoutRegistrationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
  }

  export type CourseCreateWithoutRegistrationsInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    major: MajorCreateNestedOneWithoutCoursesInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
    majorId: string
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    prerequisites?: CoursePrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    prerequisiteFor?: CoursePrerequisiteUncheckedCreateNestedManyWithoutPrerequisiteInput
  }

  export type CourseCreateOrConnectWithoutRegistrationsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRegistrationsInput, CourseUncheckedCreateWithoutRegistrationsInput>
  }

  export type SectionUpsertWithoutRegistrationsInput = {
    update: XOR<SectionUpdateWithoutRegistrationsInput, SectionUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<SectionCreateWithoutRegistrationsInput, SectionUncheckedCreateWithoutRegistrationsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutRegistrationsInput, SectionUncheckedUpdateWithoutRegistrationsInput>
  }

  export type SectionUpdateWithoutRegistrationsInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
    instructor?: InstructorUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutRegistrationsInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    courseId?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpsertWithoutRegistrationsInput = {
    update: XOR<StudentUpdateWithoutRegistrationsInput, StudentUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<StudentCreateWithoutRegistrationsInput, StudentUncheckedCreateWithoutRegistrationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutRegistrationsInput, StudentUncheckedUpdateWithoutRegistrationsInput>
  }

  export type StudentUpdateWithoutRegistrationsInput = {
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    major?: MajorUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRegistrationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    majorId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpsertWithoutRegistrationsInput = {
    update: XOR<CourseUpdateWithoutRegistrationsInput, CourseUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<CourseCreateWithoutRegistrationsInput, CourseUncheckedCreateWithoutRegistrationsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRegistrationsInput, CourseUncheckedUpdateWithoutRegistrationsInput>
  }

  export type CourseUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    major?: MajorUpdateOneRequiredWithoutCoursesNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    majorId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
  }

  export type RegistrationCreateManyStudentInput = {
    id?: string
    sectionId: string
    courseId: string
    grade: string
  }

  export type RegistrationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    section?: SectionUpdateOneRequiredWithoutRegistrationsNestedInput
    course?: CourseUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateManyInstructorInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    courseId: string
  }

  export type SectionUpdateWithoutInstructorInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
    registrations?: RegistrationUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutInstructorInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    courseId?: StringFieldUpdateOperationsInput | string
    registrations?: RegistrationUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutInstructorInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyMajorInput = {
    userId: string
    gpa: number
    finishedCreditHour: number
  }

  export type InstructorCreateManyMajorInput = {
    userId: string
  }

  export type CourseCreateManyMajorInput = {
    id?: string
    courseCode: string
    creditHour: number
    courseName: string
    isOngoing: boolean
    isRegistration: boolean
  }

  export type StudentUpdateWithoutMajorInput = {
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    registrations?: RegistrationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMajorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
    registrations?: RegistrationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutMajorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    finishedCreditHour?: IntFieldUpdateOperationsInput | number
  }

  export type InstructorUpdateWithoutMajorInput = {
    user?: UserUpdateOneRequiredWithoutInstructorNestedInput
    sections?: SectionUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutMajorInput = {
    userId?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateManyWithoutMajorInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpdateWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    sections?: SectionUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUncheckedUpdateWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutCourseNestedInput
    prerequisites?: CoursePrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    prerequisiteFor?: CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutMajorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseCode?: StringFieldUpdateOperationsInput | string
    creditHour?: IntFieldUpdateOperationsInput | number
    courseName?: StringFieldUpdateOperationsInput | string
    isOngoing?: BoolFieldUpdateOperationsInput | boolean
    isRegistration?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SectionCreateManyCourseInput = {
    sectionId?: string
    currentSeats: number
    totalSeats: number
    semester: string
    days?: string | null
    time?: string | null
    location?: string | null
    approvalStatus?: $Enums.ApprovalStatus
    sectionStatus?: $Enums.SectionStatus
    instructorId: string
  }

  export type RegistrationCreateManyCourseInput = {
    id?: string
    sectionId: string
    studentId: string
    grade: string
  }

  export type CoursePrerequisiteCreateManyCourseInput = {
    prerequisiteId: string
  }

  export type CoursePrerequisiteCreateManyPrerequisiteInput = {
    courseId: string
  }

  export type SectionUpdateWithoutCourseInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    instructor?: InstructorUpdateOneRequiredWithoutSectionsNestedInput
    registrations?: RegistrationUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCourseInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    instructorId?: StringFieldUpdateOperationsInput | string
    registrations?: RegistrationUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutCourseInput = {
    sectionId?: StringFieldUpdateOperationsInput | string
    currentSeats?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    days?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    approvalStatus?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    sectionStatus?: EnumSectionStatusFieldUpdateOperationsInput | $Enums.SectionStatus
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    section?: SectionUpdateOneRequiredWithoutRegistrationsNestedInput
    student?: StudentUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePrerequisiteUpdateWithoutCourseInput = {
    prerequisite?: CourseUpdateOneRequiredWithoutPrerequisiteForNestedInput
  }

  export type CoursePrerequisiteUncheckedUpdateWithoutCourseInput = {
    prerequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePrerequisiteUncheckedUpdateManyWithoutCourseInput = {
    prerequisiteId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePrerequisiteUpdateWithoutPrerequisiteInput = {
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
  }

  export type CoursePrerequisiteUncheckedUpdateWithoutPrerequisiteInput = {
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CoursePrerequisiteUncheckedUpdateManyWithoutPrerequisiteInput = {
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationCreateManySectionInput = {
    id?: string
    studentId: string
    courseId: string
    grade: string
  }

  export type RegistrationUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutRegistrationsNestedInput
    course?: CourseUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}