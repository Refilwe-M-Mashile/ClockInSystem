USE GirlHackDB;
GO

-- Employers
CREATE TABLE [dbo].[Employers](
	[EmployerID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](120) NULL,
	[LastName] [varchar](120) NULL,
	[Rating] [int] default 0,
	[Reviews] [varchar](8000) NULL,
);
GO